import User from "../models/user.model.js";
import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "./error.middleware.js";
import jwt from "jsonwebtoken"


export const isAuthenticated = TryCatch(async (req, res, next) => {
    const token = req.cookies["chat-token"];
    if (!token) return next(new ErrorHandler("Please login to access this route",401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.userId=decoded._id;
    

    next();

});
