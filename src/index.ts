import express, { Application } from "express";
import { app } from "./app";
import { log } from "./app/utils/logger";
const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      log.info(`Server is running on port ${PORT}`);
    });
  } catch (error: any) {
    log.error(error.message);
  }
};
startServer();
