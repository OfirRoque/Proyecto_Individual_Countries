const express = require("express");
const router = require("./routes/Countries");
const router2 = require("./routes/Activities");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/countries", router);
server.use("/activities", router2);

module.exports = server;
