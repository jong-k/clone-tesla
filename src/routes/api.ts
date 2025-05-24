import express, { Router } from "express";

const router = Router();
router.use(express.json());

router.get("/", (req, res) => {
  res.send({ message: "Hello from /api route" });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

export default router;
