import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMembers } from "../controllers/chat.controller.js";


const app = express.Router();


app.use(isAuthenticated); 
app.post("/new",newGroupChat)
app.get("/my",getMyChats)
app.get("/my/groups",getMyGroups)
app.put("/add-members",addMembers)
app.put("/remove-members",removeMembers)
app.delete("/leave/:id",leaveGroup)
app.post("/leave/:id",leaveGroup)

//send attachments
//get messages
//get chat details rename delete


export default app;


