const { dbConnection } = require("./config/dbConnection");
require("dotenv").config();

const express = require("express");
const server = express();
const cors = require("cors");

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

function startServer() {
  server.use(
    cors({
      exposedHeaders: ["X-Total-Count"],
    })
  );

  server.use(express.json()); // to parse req.body

  dbConnection()

  server.listen(8080, () => {
    console.log("server started");
  });
}

startServer();
