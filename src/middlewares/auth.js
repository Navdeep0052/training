const jwt =  require("jsonwebtoken")
const userModel = require("../models/userModel");

let validate = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //if no token is present in the request header return error. this means the user is not logged in.
    if (!token) return res.send({ status: false, msg: "token must be present"});
    next()
}

let createtoken = async function (req, res, next) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId)
    let token = jwt.sign(
        {
            userId: user._id.toString(),
            batch: "plutonium",
            organisation: "functionUp-Masters",
            category: "Bootcamp"
        },
        "functionup-plutonium-very-very-secret-key"
    );
next()
    }

    let verifyToken = async function (req, res, next) {
        let token = req.headers["x-auth-token"];
        let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
        if (!decodedToken)
        return res.send({ status: false,msg: "token is invalid" });

        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
        return res.send({ status: false,msg: "no such user exists" })
        next()
    }

    module.exports.validate = validate
    module.exports.createtoken = createtoken
    module.exports.verifyToken = verifyToken
