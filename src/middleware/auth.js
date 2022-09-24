const jwt = require("jsonwebtoken");
const {isValidId} = require('../validators/validator')

//===============================AUTHENTICATION=============================
const authenticate = async (req, res, next) => {
  try {
    let token = req.headers["x-api-key"] || req.headers["X-API-KEY"];
    if (!token)
      return res
        .status(400)
        .send({ status: false, msg: "token must be present" });

    jwt.verify(token, "i'm as calm as the sea", (err, decodedToken) => {
      if (err) {
        let message = err.message === "jwt expired"? "token is expired":"token is invalid";
        return res.status(401).send({ status: false, message: message });
      }
      req["decodedToken"] = decodedToken;
      next();
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

//================================AUTHORIZATIONS====================
const authorise = async (req, res, next) => {
  try {
    let bookId = req.params.bookId;

    if (!isValidId(bookId))
      return res.status(400).send({ status: false, message: "Invalid bookId" });

    let book = await bookModel.findOne({ _id: bookId });
    if (!book)
      return res
        .status(404)
        .send({ status: false, message: "No book available with this bookId" });

    let seekingUser = book.userId.toString();
    let loggedInUser = req.decodedToken.userId;

    if (loggedInUser != seekingUser)
      return res.status(403).send({
        status: false,
        msg: "You are not authorised for this operation",
      });
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { authenticate, authorise };
