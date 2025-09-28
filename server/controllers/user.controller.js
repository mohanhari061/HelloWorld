import User from "../models/user.model.js";
import { sendToken } from "../features/sendToken.features.js";
import { compare } from "bcrypt";
import { TryCatch } from "../middlewares/error.middleware.js";
import { ErrorHandler } from "../utils/utility.js";
import { cookieOption } from "../constants/constants.js";

// create new user and save it in db and save in cookie
export const newUser = TryCatch(async (req, res, next) => {
    const { name, username, password, bio } = req.body;

    console.log(req.body);
    const avatar = {
        public_id: "123456",
        url: "https://via.placeholder.com/150",
    };
    const user = await User.create({ name, username, password, avatar });
    console.log(user);
    sendToken(res, user, 201, "User created Successfully");
});

export const login = TryCatch(async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");
    if (!user)
        return next(new ErrorHandler("Invalid username or password", 404));

    const isMatch = await compare(password, user.password);
    if (!isMatch)
        return next(new ErrorHandler("Invalid username or password", 404));

    sendToken(res, user, 201, `Welcome back ${user.name}`);
});

export const getMyProfile = TryCatch(async (req, res) => {
    const user = await User.findById(req.userId);
    res.status(200).json({ success: true, user });
});

export const logout = TryCatch(async (req, res, next) => {
    res.status(200)
        .cookie("chat-token", "", { ...cookieOption, maxAge: 0 })
        .json({ success: true,message:"Logout Succesfully" });
});

export const searchUser = TryCatch(async (req, res, next) => {
	const {name}=req.query

	res.status(200)
        .json({ success: true,message:name });
});
