const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mrluqman0:QGLQ47x6b66OTWYG@testdb.so7dcaf.mongodb.net/?retryWrites=true&w=majority")

const User = require('./models/userModels');

http.listen(3000, function(){
    console.log('Server is Running');

}); 