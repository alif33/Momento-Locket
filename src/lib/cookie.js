const { verifyToken } = require("./token");

const parseCookie = async req =>{
    const cookie = await verifyToken(req.cookies.get("__tx__")?.value)
    return cookie;
}

export { parseCookie };