
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const JWT_SECRET = "topsecret"; // Esto habría que ponerlo en config.js
const JWT_EXPIRATION = "1d";
//TODO  const config = require('../../config');
const {errUnauthorized} =require ('../../errors')


const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password,salt);
}

const comparePassword = async (password,dbPasword) => {
    return bcrypt.compare(password, dbPasword);
}

const createToken = (email,userType,uid) => {
    const token = jwt.sign({email}, JWT_SECRET, {expiresIn: JWT_EXPIRATION});
    const utype= userType;
    
    return {
        accessToken: token,
        userType: userType,
        userid: uid,
        tokenType: "Bearer",
        expiresIn: JWT_EXPIRATION,
    };

    
}

const decodeToken = (token) => {
    try{
        const result = jwt.verify (token,JWT_SECRET);
        return result;

    }
    catch(e) {
        switch(e.name){
            case "JsonWebTokenError":{
                errUnauthorized(`Ẁrong token`);
                break;
            }
            case "TokenExpiredError":{
                errUnauthorized(`Token expired` );
                break;
            }
            default:
                throw e;
        }
    }

    
}

module.exports = {
    encryptPassword,
    comparePassword,
    createToken,
    decodeToken,
}