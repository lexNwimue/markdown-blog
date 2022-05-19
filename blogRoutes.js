import express from "express";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.render("pages/blogDetails");
});

router.get("/create", (req, res) => {
  res.render("pages/createBlog");
});

export default router;
