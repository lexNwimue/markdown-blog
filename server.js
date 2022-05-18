import express from "express";
import mongoose from "mongoose";
import blogRoutes from "./blogRoutes.js";

const app = express();

mongoose.connect("mongodb://localhost/mardown_blog_db", () => {
  console.log("Connected successfully...");
  app.listen(5000, () => {
    console.log("Listening to requests on port 5000");
  });
});

app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.use("/blogs", blogRoutes);
