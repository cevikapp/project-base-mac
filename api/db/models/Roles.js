const mongoose = require("mongoose");
const RolePrivileges = require("./RolePrivileges");
const schema = mongoose.Schema({
    role_name: {type:String, required:true},
    is_active: {type:Boolean, default: true},
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
    }
},{
    versionKey:false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


// Roles -> deleteMany- deleteOne findMany findOne save
class Roles extends mongoose.Model {
    static async roluSilAyniZamanadaBagliRolePriviligesideSil(query) {
        await RolePrivileges.deleteMany({role_id: query._id});
        await super.deleteMany(query);
    }
}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);