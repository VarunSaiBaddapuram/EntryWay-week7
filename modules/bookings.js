const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/EntryWay",{useNewUrlParser:true});
const conn=mongoose.connection;
const bookingSchema = new mongoose.Schema({
    Booked_by:{
        type: mongoose.Schema.Types.ObjectId, ref:'visitors'
    },
    Booked_on:String,
    valid_till:String,
    number_of_tickets:Number,
    Booked_for:{
        type:mongoose.Schema.Types.ObjectId,ref:'EntryWay'
    },
},{collation:'bookings'});
const bookings = module.exports = mongoose.model('bookings',bookingSchema);