const express = require('express');

const app = express();

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

})


app.listen(8080,()=>{
    console.log("App rodando!")
});