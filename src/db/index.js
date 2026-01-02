import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInnstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDb connected !! DB HOST: ${connectionInnstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo Db connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
