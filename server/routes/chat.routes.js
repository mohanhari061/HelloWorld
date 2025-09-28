import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
    addMembers,
    deleteChat,
    getChatDetails,
    getMessages,
    getMyChats,
    getMyGroups,
    leaveGroup,
    newGroupChat,
    removeMembers,
    renameChat,
    sendAttachments,
} from "../controllers/chat.controller.js";
import { attachmentMulter } from "../middlewares/multer.middleware.js";

const app = express.Router();

app.use(isAuthenticated);
app.post("/new", newGroupChat);
app.get("/my", getMyChats);
app.get("/my/groups", getMyGroups);
app.put("/add-members", addMembers);
app.put("/remove-members", removeMembers);
app.delete("/leave/:id", leaveGroup);

//send attachments
app.post("/message", attachmentMulter, sendAttachments);
app.get("/message/:id", getMessages);
//get messages
//get chat details rename delete
app.route("/:id").get(getChatDetails).put(renameChat).delete(deleteChat);;

export default app;
