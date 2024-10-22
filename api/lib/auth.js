const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const config = require("../config");
const Users = require("../db/models/Users");
const UserRoles = require("../db/models/UserRoles");
const RolePrivileges = require("../db/models/RolePrivileges");

module.exports = function() {
    let strategy = new Strategy({
        secretOrKey: config.JWT.SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken
    }, async (payload, done) => {
        try {
            let user = await Users.findOne({_id: payload._id});

            if (user) {
                let userRoles = await UserRoles.find({ user_id: payload._id });
                let rolePrivileges = await RolePrivileges.find({ role_id: { $in: userRoles.map(ur => ur.role_id) } });

                done(null, {
                    id: user._id,
                    roles: rolePrivileges,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    exp: parseInt(Date.now() / 1000) + config.JWT.EXPIRE_TIME
                });
            } else {
                return done(new Error("User not found"), null);
            }
        } catch (err) {
            done(new Error("An error occurred while processing your request."), null);
        }
    });

    passport.use(strategy);

    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", { session: false });
        }
    };
};
