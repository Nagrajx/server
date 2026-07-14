const jwt = require("jsonwebtoken");
require("dotenv").config()

async function auth (req,res,next)  {
    try {
        const token =
            req.cookies.token ||
            req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token",
        });
    }
};

async function isEmployee (req, res, next)  {
    if (req.user.role !== "employee") {
        return res.status(403).json({
            success: false,
            message: "Only employees can access this resource.",
        });
    }

    next();
};

async function isCustomer (req, res, next)  {
    if (req.user.role !== "customer") {
        return res.status(403).json({
            success: false,
            message: "Only customers can access this resource.",
        });
    }

    next();
};

module.exports = {auth ,isCustomer,isEmployee}