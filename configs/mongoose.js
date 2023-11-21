import mongoose from "mongoose";

export const mongoConnection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017", { dbName: "REST_API" }).then(() => console.log("MongoDB Connected")).catch((err) => console.log(err))
}