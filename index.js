const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());



app.set('view engine','ejs');
app.use(express.static('public')) //carregar css




app.get("/",(req,res)=> {
  
    res.render('index')

})


app.get('/comentar',(req,res)=>{
    res.render('comentar')
})

//usado no formulario
app.post('/salvarpergunta',(req,res)=>{
    var titulo = req.body.titulo; // body parser disponibiliza esse .body
    var descricao = req.body.descricao;
    // res.send("Formulario recebido! Titulo " + titulo +" Descricao "+ descricao )
    res.json({
        titulo: titulo,
        descricao: descricao
    })
})


app.listen(8080,()=>{
    console.log("App rodando!")
});