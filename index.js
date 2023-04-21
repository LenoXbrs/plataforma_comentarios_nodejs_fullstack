const express = require('express');
const app = express();
//conectando com banco
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');


//database
connection.authenticate().then(()=>{
    console.log("Conexao realizada com sucesso!");
}).catch((msgErro)=>{
    console.log("Conexao falhou!");
});


app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.set('view engine','ejs');
app.use(express.static('public')); //carregar css



//buscando objetos no banco com o sequelize 
app.get("/",(req,res)=> {
    //raw true é para trazer apaenas o objeto, order: primeiro valor nome do campo e 0 2 se vai ser asc ou desc
    Pergunta.findAll({raw: true,order:[['id','DESC']]}).then(perguntas => {
        console.log(perguntas)
        res.render('index',{
            pergunta: perguntas
        });
    })
  

})


app.get('/comentar',(req,res)=>{
    res.render('comentar');
})

//o formulario faz um requisição post e manda os dados para esse endpoint, onde eu recebo esses dados e coloco em uma entity que sera grvada no banco 
app.post('/salvarpergunta',(req,res)=>{
    var titulo = req.body.titulo; 
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao,
    }).then(()=>{
        //mudar a tela onde a pessoa esta para outra !!!IMPORTANTE!!!
       
        res.redirect('/');
    });
    
    
    // res.send("Formulario recebido! Titulo " + titulo +" Descricao "+ descricao );
  //  res.json({ titulo: titulo,descricao: descricao});
})


app.get('/pergunta/:id',(req,res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            res.render('pergunta',{
               pergunta: pergunta
            })
        }else{
            res.redirect('/');
        }
    })
});


app.listen(8080,()=>{
    console.log("App rodando!");
});