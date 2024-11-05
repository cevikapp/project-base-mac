const express = require("express");
const moment = require("moment");
const Response = require("../lib/Response");
const router = express.Router();
const AuditLogs = require("../db/models/AuditLogs");
const Categories = require("../db/models/Categories");
const Users = require("../db/models/Users");
const auth = require("../lib/auth")();

// router.all("*", auth.authenticate(), (req,res,next) => {
//     next();
// });

router.post('/auditlogs', async (req, res, next) =>{
    
    try {

        let body = req.body;
        let filter = {};

        if (typeof body.location === "string") filter.location = body.location;

        let result = await AuditLogs.aggregate([
            {$match: filter},
            {$group: {_id: {email: "$email", proc_type: "$proc_type"}, count: {$sum: 1}}},
            {$sort: {count: -1}}
        ]);

        res.json(Response.successResponse(result));
        
    } catch (err) {
        let errorResponse = Response.errorResponse(err, req.user?.language);
        res.status(errorResponse.code).json(errorResponse);
    }
});

router.post('/categories/unique', async (req, res, next) =>{
    
    try {

        let body = req.body;
        let filter = {};

        if (typeof body.is_active === "boolean") filter.is_active = body.is_active;

        let result = await Categories.distinct("name", filter);

        res.json(Response.successResponse({result, count: result.length}));
        
    } catch (err) {
        let errorResponse = Response.errorResponse(err, req.user?.language);
        res.status(errorResponse.code).json(errorResponse);
    }
});

router.post("/users/count", async (req, res, next) =>{
    
    try {

        let body = req.body;
        let filter = {};

        if (typeof body.is_active === "boolean") filter.is_active = body.is_active;

        let result = await Users.countDocuments(filter);

        res.json(Response.successResponse({result}));
        
    } catch (err) {
        let errorResponse = Response.errorResponse(err, req.user?.language);
        res.status(errorResponse.code).json(errorResponse);
    }
});

module.exports = router;