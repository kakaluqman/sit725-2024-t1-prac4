const express =  require('expresss')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/crud')

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number  
})

const UserModel = mongoose.model("db", UserSchema)

app.get("/getUsers", (req,res) => {
    UserModel.find({}).then(function(users){
      res.json(db)
    }).catch(function(err){
          console.log(err)
    })
})

app.listen(3001, ()=> {
    console.log("server is Running")


})