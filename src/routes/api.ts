import express, { Router } from "express";

const router = Router();
router.use(express.json());

router.get("/", (req, res) => {
  let message = req.query.message;
  if (!message) {
    res.status(400);
    message = "Message is required";
  }
  res.send({ message });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

export default router;
