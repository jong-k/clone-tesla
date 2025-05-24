import express from "express";
import apiRouter from "./routes/api";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Top Page");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
