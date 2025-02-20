import express from "express"
import dbConnect from "./helpers/dbConnect.js";
import { authRoutes,userRoutes,songRoutes } from "./routes/index.js";
import authenticate from "./middlewares/authenticate.js";
const app = express();
dbConnect;
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use(authenticate)
app.use("/api/users",userRoutes);
app.use("/api/song",songRoutes);
app.listen(process.env.PORT,()=>{
    console.log("Listening to port 4000")
})