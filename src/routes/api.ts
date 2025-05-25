import express, { Router } from "express";

const router = Router();
router.use(express.json());

router.get("/", (req, res) => {
  res.setHeader("X-Timestamp", new Date().toISOString());
  let message = req.query.message;
  const lang = req.headers["X-Lang"];

  if (!message) {
    res.status(400);
    message = lang === "en" ? "Message is required" : "메시지는 필수입니다";
  }
  res.send({ message });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

export default router;
