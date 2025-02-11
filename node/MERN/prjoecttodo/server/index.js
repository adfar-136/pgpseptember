const express = require("express");
const router = require("./routes/tasks");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
app.use(cors())
mongoose.connect("mongodb://localhost:27017/pgpseptember").then(()=>{
    console.log("connection successful");
})

app.use(express.json());

app.use("/tasks",router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});