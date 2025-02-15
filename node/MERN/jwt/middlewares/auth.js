const jwt = require("jsonwebtoken");

const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const decoded = await jwt.verify(token,'secret');
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}
module.exports = auth