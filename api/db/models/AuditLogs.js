const mongoose = require("mongoose");
const schema = mongoose.Schema({
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String
},{
    versionKey:false,
    timestaps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class AuditLogs extends mongoose.Model {

}

schema.loadClass(AuditLogs);
module.export = mongoose.model("audit_logs", schema);