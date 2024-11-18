import express from "express";
import { postsList } from "./db/index.js";

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (_, res) => res.send("Server del mio blog"));
app.get("/bacheca", (_, res) =>
  res.json({ postsList, postsCount: postsList.length })
);

app.listen(PORT, () => console.log(`✅ Server running on port: ${PORT}`));
