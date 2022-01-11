const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const app = express();
const userRoutes = require("./routes/user");

// DB Connections
require("./connections/connection");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//My Routes
app.use("/api", userRoutes);
//assign port

app.listen(8000, () => {
  console.log("server is lisiting to the port 8000");
});
