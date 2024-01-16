let express = require("express")
//this command pull express from node packages


let app = express()
//this will allow to use express object features

app.set("view engine","ejs")
//set ejs to function with express
//also create a views folder so that express can access file



app.listen(/*port_number*/ 8080,()=>{
  console.log("Server running on post 8080")
})
//app.listen will start a server on desired port and listens for request

app.get(/*route*/"/",(req,res)=>{
  res.send("Welcome to express!")
})

//app.get is a method that send respond on GET request
//res is an object and it contains many important information EX: req.params

app.get("/find/:username",(req,res)=>{
  let {username} = req.params;
  res.send(`Welcome to ${username}'s page`)
})

//  "/:username" => here we are declaring a variable
//called username and we can access it on request 
//like top example

app.get("/home/search",(req,res)=>{
  let {q} = req.query;
  res.send(`You searched for ${q}`)
})

//req.query is an object that represent QUERY STRINGS
//ex: http://localhost:8080/home/search?q=%22arif%22arif
//here ?q="arif" after search letter is a QUERY STRING


app.get("/home",(req,res)=>{
  res.render("home")
})

//res.render will search for ejs file in views folder
//and render it on desired route


app.get("/home/users/:name",(req,res)=>{
  let {name} = req.params;
  res.render("user",{name})
})

//res.render can take second argument as an object
//and we can use it in ejs file