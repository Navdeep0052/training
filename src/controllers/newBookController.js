// Assignment :
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

// create the following API’s (write logic in bookController and routes in routes):
// •	createBook : to create a new entry..use this api to create 11+ entries in your collection
// •	bookList : gives all the books- their bookName and authorName only 
// •	getBooksInYear: takes year as input in post request and gives list of all books published that year
// •	getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// o	e.g if body had { name: “hi”} then you would fetch the books with this name
// o	if body had { year: 2020} then you would fetch the books in this year
// o	hence the condition will differ based on what you input in the request body
// •	getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
// •	getRandomBooks - returns books that are available in stock or have more than 500 pages 



const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/newBook")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
let bookList= await BookModel.find( )
res.send(bookList)
}

// •	bookList : gives all the books- their bookName and authorName only 
//const bookName
const booklist=async function(req,res){
    const bookList=await BookModel.find().select({ bookName: 1, authorName: 1,_id:0})
    
    res.send(bookList)
}



// •	getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear=async function(req,res){
    const data=req.query
    let allBooks= await BookModel.find( { yeare:data.yeare } ) 
    res.send(allBooks)
}


// •	getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// o	e.g if body had { name: “hi”} then you would fetch the books with this name
// o	if body had { year: 2020} then you would fetch the books in this year
// o	hence the condition will differ based on what you input in the request body


const getParticularBooks=async function(req,res){
    const data=req.query;
    let allBooks= await BookModel.find( { 
            $or: [ { bookName: data.bookName} ,  { yeare: data.yeare},]
    })
    if(allBooks.length>0){
        res.send(allBooks)
    }
    else{
        res.send(data)
    }
   
}


//•	getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBooks=async function(req,res){
   
    let data=await BookModel.find({$or:[{"prices.indianPrice":{$eq:"100"}},{"prices.indianPrice":{$eq:"200"}},{"prices.indianPrice":{$eq:"500"}},]})
    res.send(data)
}


// •	getRandomBooks - returns books that are available in stock or have more than 500 pages 
const getRandomBooks=async function(req,res){
   
    let data=await BookModel.findOne({$or:[{isStackAvailable
:{$eq:true }},{totalPages
:{$gt:500}}]})
    res.send(data)
}


module.exports.newCreateBook= createBook
module.exports.newGetBooksData= getBooksData
module.exports.newbookList= booklist
module.exports.newGetBooksInYear= getBooksInYear
module.exports.newgetParticularBooks= getParticularBooks
module.exports.newgetXINRBooks= getXINRBooks
module.exports.newgetRandomBooks= getRandomBooks