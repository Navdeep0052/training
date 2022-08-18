const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName: {
        type:String,
        unique:true,
        requird:true },
    BookAuthor: {
        type:String,
        unique:true,
    },//required:true },

    Category: {
        type: String,
        enum:["english", "romance", "history"]
    },
    year: Number, 

}, { timestamps: true});

module.exports = mongoose.model('Book', BookSchema) //users
    