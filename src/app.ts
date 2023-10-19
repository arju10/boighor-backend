import cors from "cors";
import express, { Application } from "express";
import { connectDatabase } from "./app/utils/dbConnect";

const app: Application = express();

// Using Cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// render ejs
app.set("view engine", "ejs");

// render ejs
app.set("view engine", "ejs");

// Connect Database
connectDatabase();
// All Routes will be imported here
// Default Route
app.get("/", (req, res) => {
  res.render("index");
});

export { app };
