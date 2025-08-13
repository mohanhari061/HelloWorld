import mongoose from "mongoose";


const connectDB=(uri)=>{
    mongoose.connect(uri,{dbname:"HelloWorld"}).then((data)=>{
        console.log("Connected to MongoDB --> ",data.connection.host);
    }).catch((err)=>{
        console.log(err);
        throw err;
    });
}

export default connectDB;