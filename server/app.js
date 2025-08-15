import express from "express"
import userRoutes from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import connectDB from "./database/connectDB.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import { createUser } from "./seeders/user.seeder.js";
import { createGroupChat, createMessages, createMessagesInChat, createSingleChat } from "./seeders/chat.seeder.js";



dotenv.config({
    path:"./.env"
})

const mongoURI=process.env.MONGO_URI
const port=process.env.PORT || 3000

connectDB(mongoURI);
// createUser(10);
// createSingleChat(10)
// createGroupChat(10)
// createMessagesInChat("689f3dbe1e461355e3b793af",50)
// createMessages(200)




const app =express();


// using middle wares 

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.use("/user",userRoutes);
app.use("/chat",chatRoutes);

app.get("/",(req,res)=>{
    res.send("Hello World")
})



app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

