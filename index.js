const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get("/comentarios",(req,res)=> {
    res.render("index")
})

app.get("/login",(req,res)=> {
    res.render("login-page")
})


app.listen(8080,()=>{
    console.log("App rodando!")
});