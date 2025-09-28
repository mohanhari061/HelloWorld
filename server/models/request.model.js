import mongoose, { model, Schema, Types, } from "mongoose";

const requestSchema = new Schema(
	{
		status: {
            type:String,
            enum:["pending","accepted","rejected"],
            default:"pending",
        },
		sender: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
        receiver:{
            type:Types.ObjectId,
            ref:"User",
            required:true,
        },
		
	},
	{ timestamps: true }
);

const Request = mongoose.models.Request || model("Request", requestSchema);

export default Request;
