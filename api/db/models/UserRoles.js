const mongoose = require("mongoose");
const schema = mongoose.Schema({
    role_id: {
        type: mongoose.SchemaType.ObjectID,
        required: true
    },
    user_id: {
        type: mongoose.SchemaType.ObjectID,
        required: true
    }
},{
    versionKey:false,
    timestaps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class UserRoles extends mongoose.Model {

}

schema.loadClass(UserRoles);
module.export = mongoose.model("user_roles", schema);