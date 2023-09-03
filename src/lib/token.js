import jwt from "jsonwebtoken";

const getToken = async({_id, email})=>{
    return jwt.sign({ _id, email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
}

const verifyToken = async token =>{
    return jwt.verify(token, process.env.JWT_SECRET);
}

export { getToken, verifyToken };
