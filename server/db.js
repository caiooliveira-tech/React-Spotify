import mongoose from "mongoose";

export default async function conectDb() {
    mongoose.connect("mongodb+srv://victortadashisaitobarra:KgBJSeMR83mTipUW@cluster0.cpiz2.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}