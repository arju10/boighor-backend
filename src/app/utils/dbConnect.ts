import mongoose from "mongoose";
import { log } from "./logger";
import dotenv from "dotenv";
dotenv.config();

const { URL } = process.env;
log.info(URL);
const connectDatabase = async (): Promise<void> => {
  try {
    if (!URL) {
      log.error("Database not found");
      process.exit(1);
    } else {
      await mongoose.connect(URL);
      log.info("Database Connected Successfully!");
    }
  } catch (error: any) {
    log.error(error.message);
  }
};

export { connectDatabase };
