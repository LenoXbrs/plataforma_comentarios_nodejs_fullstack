const express = require('express');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public')) //carregar css

app.get("/:nome/:lang",(req,res)=> {
  
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
    {nome: "doritos", preco: 5.14,},
    {nome: "coca-cola",preco:11.50,},
    { nome:"Leite",preco: 6.29,}
    ]
    

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Savage Code",
        inscritos: 8000 ,
        msg : exibirMsg,
        produtos : produtos
    })
})


app.get('/login',(req,res)=>{


    res.render('login-page')

})




app.listen(8080,()=>{
    console.log("App rodando!")
});