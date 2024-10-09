const mongoose = require("mongoose");
const schema = mongoose.Schema({
    role_name: {type:String, required:true},
    is_active: {type:Boolean, default:true},
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

class Roles extends mongoose.Model {

}

schema.loadClass(Roles);
module.export = mongoose.model("roles", schema);