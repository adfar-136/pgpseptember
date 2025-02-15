const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user');
const cookieParser = require('cookie-parser');
const cors = require("cors")
const app = express();
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
))
app.use(express.json())
app.use(cookieParser())
const PORT = 8000;
app.use("/auth",router)
mongoose.connect('mongodb://localhost:27017/seppgpauth').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});