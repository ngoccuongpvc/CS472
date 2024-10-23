import mongoose from "mongoose";
import config from "../config/config.js";

console.log("Connecting to mongodb server...");
await mongoose.connect(config.mongodb_uri);
console.log("Connected to mongodb server!");
