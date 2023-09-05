const mongoose = require('mongoose');
const { collection } = require('./monuments');
mongoose.connect("mongodb://127.0.0.1:27017/EntryWay",{useNewUrlParser:true});
const conn=mongoose.connection;
const ticketSchema = new mongoose.Schema({
    ticket_no:Number,
     ticket_for:{
       type:mongoose.Schema.Types.ObjectId, ref:'monuments'  
     },
     tickettype:{
         for_foreigners:Number,
         for_native:Number
     },
},
{collection:'tickets'});

const tickets = module.exports = mongoose.model('tickets',ticketSchema);