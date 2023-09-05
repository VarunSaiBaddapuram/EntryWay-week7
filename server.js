const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
var entryModel = require('./modules/monuments');
var bookingModel = require('./modules/bookings');
var visitorModel = require('./modules/visitors');
var ticketModel = require('./modules/tickets');
// var tickettypeModel=require('./modules/ticketstypes');
const { MongoDBNamespace } = require('mongodb');

// const { default: mongoose } = require("mongoose");
const app =  express();

const conn = mongoose.connection;
conn.on("connected",function(){
  console.log("connected successfully");
});

conn.on("disconnected",function(){
  console.log("disconnected successfully");
});

 
conn.on('error',console.error.bind(console,'connection error:'));
conn.on('open',function(){
  // for monuments
  var mon = new entryModel({
    siteid: '5',
    siteName:'temple',
    sitetype:'holy place',
    siteAddress:'Andra',
    siteDescription:'it is a devine place',
    siteOpenTime:7,
    siteCloseTime:8,
    isAccomodationAvailable:'yes',
    contactDetails:{
      contactEmail:'temple@gamil.com',
      contactPhone:91238572345, 
      
    },
   ticketPrice:50
  })
  mon.save(function(err,data){
    if(err) throw err;
    console.log(data)
  });
  console.log(mon._id);

  // for tickets
  var ticket = new ticketModel({
    ticket_no:2,
    ticket_for:mon._id,
    tickettype:{
      for_foreigners:'250',
      for_native:'100',
    },
  })
  ticket.save(function(err,data){
    if(err) throw err;
    console.log(data)
  });
  console.log(ticket._id);

  // for bookings
  var booking = new bookingModel({
    Booked_by:visitorModel._id,
    Booked_on:'5th-march-2019',
    valid_till:'12th-march-2019',
    number_of_tickets:3,
    Booked_for:mon._id
  });
  booking.save(function(err,data){
    if(err) throw err;
    console.log(data)
  });
  console.log(booking._id);

  // for visitors
  var visitor = new visitorModel({
    name:'varun',
    age:20,
    contactDetails:{
      contactPhone:983652894,
      contactEmail:'varun@gamil.com'
    },
    visitor_type:'native'
  });
  visitor.save(function(err,data){
    if(err) throw err;
    console.log(data);
  });
  console.log(visitor._id);



});


//for tickets
/*
conn.on('open',function(){
  var ticket = new ticketModel({
    ticket_no:2,
    ticket_for:entryModel.siteName,
    tickettype:{
      for_foreigners:'250',
      for_native:'100',
    },
  })
  ticket.save(function(err,data){
    if(err) throw err;
    console.log(data)
  });
  console.log(ticket._id);
});


//for bookings
conn.on('open',function(){
  var booking = new bookingModel({
    Booked_by:visitorModel._id,
    Booked_on:'5th-march-2019',
    valid_till:'12th-march-2019',
    number_of_tickets:3,
    Booked_for:mon._id
  });
  booking.save(function(err,data){
    if(err) throw err;
    console.log(data)
  });
  console.log(booking._id);
});

//for visitors
conn.on('open',function(){
  var visitor = new visitorModel({
    name:'varun',
    age:20,
    contactDetails:{
      contactPhone:983652894,
      contactEmail:'varun@gamil.com'
    },
    visitor_type:'native'
  });
  visitor.save(function(err,data){
    if(err) throw err;
    console.log(data);
  });
  console.log(visitor._id);
});
*/