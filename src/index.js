import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect(
  "mongodb+srv://root:OTcIRskqhKwN3oII@printerservice-e9zdx.gcp.mongodb.net/test?retryWrites=true&w=majority"
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("MongoDB connected.");
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
