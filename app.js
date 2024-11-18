const express = require("express");
const bodyparser = require("body-parser");
//adding the date.js
const date = require(__dirname + "/date.js"); //date.js saves into date
console.log(date());//we are tapping the data of date by triggring function which is date()


let names = ["Buy Fodd", "Cook Food", "Eat food"];
let workItems = [] //this is for the work route

const app = express();
//using middleware to handle the data that is getting from the clinet
app.use(express.urlencoded({extended:true}));
//for css 
app.use(express.static("public"));
//using ejs as a view engine
app.set('view engine', 'ejs');

app.get("/",function(req,res){//server sending the data
    let day = date(); //we are using the value of day in res.render 
    //kindofDay : day
    
    res.render('list',{ //list means the list.ejs file 
        KindofDay:day,
        list_name: names
    })
 
    
});
app.post('/',function(req,res){//submitted data from clients come here.
    
    //parsing the userinput in the input field
    let name = req.body.newitem;
    
    if(req.body.list === "Work"){
        workItems.push(name);
        res.redirect("/work");

    }else{
        names.push(name); 
        res.redirect("/");

    }
    
   
  
  
     
});
//anonther route 
app.get("/work",function(req,res){
    res.render("list",{KindofDay:"Work List",list_name:workItems});

});
app.post("/work",function(req,res){
    let item = req.body.newitem;//input the clients sends to server
    workItems.push(item);
    redirect("/");
 
});
app.get("/about",function(req,res){
    res.render("about");
})


app.listen(3000,function(){
    console.log("The server is  running on port 3000");
});