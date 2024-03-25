import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';
const MONGODB_URL = 'mongodb+srv://john:john123@cluster0.r9e4fpf.mongodb.net';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log('MONGODB connection FAILED ', error);
    process.exit(1);
  }
};

export default connectDB;
