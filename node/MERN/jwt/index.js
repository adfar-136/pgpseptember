const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user');
const app = express();
app.use(express.json())
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