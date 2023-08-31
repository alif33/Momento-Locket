import jwt from "jsonwebtoken";

const getToken = async({_id, email})=>{
    return jwt.sign({ _id, email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
}

export default getToken;
