import express from "express"
import dbConnect from "./helpers/dbConnect.js";
import { authRoutes,userRoutes,songRoutes } from "./routes/index.js";
const app = express();
dbConnect;
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/song",songRoutes);
app.listen(process.env.PORT,()=>{
    console.log("Listening to port 4000")
})