import express from "express";
import controller from "./controller.mjs";

const router = express.Router();

router.post("/create", controller.post_create_blog);

router.get("/create", controller.get_create_blog);

router.get("/:id", (req, res) => {
  res.render("pages/blogDetails");
});

export default router;
