const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get("/",(req,res)=> {
    var inscritos = 8000;
    var nome = "Luis";
    var lang = "Java";
    

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Savage Code",
        inscritos: inscritos ,
    })
})



app.listen(8080,()=>{
    console.log("App rodando!")
});