const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/EntryWay",{useNewUrlParser:true});
const conn=mongoose.connection;
const Schema = new mongoose.Schema({
    siteid:String,
    siteName:String,
    sitetype:String,
    siteAddress:String,
    siteDescription:String,
    siteOpenTime:Number,
    siteCloseTime:Number,
    isAccomodationAvailable:String,
    contactDetails:{
        contactPhone:Number,
        contactEmail:String,
    },
      ticketPrice:Number
},
{collection:'Tourist_Sites'});
var entryModel = mongoose.model('EntryWay',Schema);
module.exports = entryModel;