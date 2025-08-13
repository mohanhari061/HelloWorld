import mongoose, { model, Schema, Types, } from "mongoose";

const messageSchema = new Schema(
	{
		content: String,
		sender: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
		chat: {
			type: Types.ObjectId,
			ref: "Chat",
			required: true,
		},
		attachments: [
			{
				public_id: {
					type: String,
					required: true,
				},
				url: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true }
);

const Message = mongoose.models.Message || model("Message", messageSchema);

export default Message;
