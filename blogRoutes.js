import express from "express";

const router = express.Router();

router.get("/create", (req, res) => {
  res.render("pages/createBlog");
});

router.get("/:id", (req, res) => {
  res.render("pages/blogDetails");
});

export default router;
