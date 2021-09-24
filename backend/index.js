const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
console.log("hi");

app.listen(process.env.PORT || 5000);
