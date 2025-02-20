import jwt from "jsonwebtoken";


export default function (req,res,next){
    const token =  req.header("Authorization");
    if(!token){
        return res.status(401).json({error:"Access Denied"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {
            _id : decoded.userId
        }
        next()
    } catch (error) {
        res.status(401).json({message:"Not authorized"})
    }

}

