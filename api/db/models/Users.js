const mongoose = require("mongoose");
const schema = mongoose.Schema({
    email: String,
    password: String,
    is_active: Boolean,
    first_name: String,
    last_name: String,
    phone_number: String,
},{
    timestaps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Users extends mongoose.Model {

}

schema.loadClass(Users);
module.export = mongoose.model("users", schema);