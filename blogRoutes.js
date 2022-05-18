import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("List of blogs go here...");
});

router.get("/:id", (req, res) => {
  console.log("Blog with particular ID goes here");
});

export default router;
