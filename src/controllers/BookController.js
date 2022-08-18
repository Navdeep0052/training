const BookModel= require("../models/BookModel")

const createBook= async function (req,res) {
    let data= req.body
    let saveDta= await BookModel.create(data)
    res.send({msg: saveDta})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData