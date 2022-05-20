import express from "express";
import mongoose from "mongoose";
import blogRoutes from "./blogRoutes.js";
import controller from "./controller.mjs";
const app = express();

app.listen(5000, () => {
  console.log("Listening to requests on port 5000");
});

app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", controller.get_home);

app.use("/blogs", blogRoutes);
