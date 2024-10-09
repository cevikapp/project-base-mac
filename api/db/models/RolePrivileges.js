const mongoose = require("mongoose");
const schema = mongoose.Schema({
    role_id: {
        type: mongoose.SchemaType.ObjectID,
        required: true
    },
    permission: {type:Boolean, default:true},
    created_by: {
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

class RolePrivileges extends mongoose.Model {

}

schema.loadClass(RolePrivileges);
module.export = mongoose.model("role_privileges", schema);