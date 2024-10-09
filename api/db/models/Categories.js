const mongoose = require("mongoose");
const schema = mongoose.Schema({
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

class Categories extends mongoose.Model {

}

schema.loadClass(Categories);
module.export = mongoose.model("categories", schema);