const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/EntryWay",{useNewUrlParser:true});
const conn=mongoose.connection;
const visitSchema = new mongoose.Schema({
    name:String,
    age:Number,
    contactDetails:{  
            contactPhone:Number,
            contactEmail:String,   
    },
    visitor_type:String,
},{collation:'visitors'});

const visitors = module.exports = mongoose.model('visitors',visitSchema);