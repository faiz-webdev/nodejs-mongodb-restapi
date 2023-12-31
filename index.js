const { dbConnection } = require("./config/dbConnection");
require("dotenv").config();
const { routeConfig } = require("./config/ExpressApp");
const express = require("express");

const server = express();
const cors = require("cors");

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

async function startServer() {
  server.use(
    cors({
      exposedHeaders: ["X-Total-Count"],
    })
  );

  server.use(express.json()); // to parse req.body
  // server.use("/brand", brandRouter.router);
  // await routeConfig(server);
  await routeConfig(server);

  await dbConnection();

  server.listen(process.env.PORT, () => {
    console.log("server started " + process.env.PORT);
  });
}

startServer();
