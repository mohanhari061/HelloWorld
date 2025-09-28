import jwt from "jsonwebtoken"
import { cookieOption } from "../constants/constants.js";



export const sendToken = (res, user, code, message) => {
	const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

	// console.log(token)
	res
		.status(code)
		.cookie("chat-token", token, cookieOption)
		.json({ success: true, message});
};


