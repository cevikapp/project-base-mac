const mongoose = require("mongoose");
const schema = mongoose.Schema({
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    permission: {type:String, required:true, minlength:1},
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true
    }
},
{
    versionKey:false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class RolePrivileges extends mongoose.Model {

}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges", schema);