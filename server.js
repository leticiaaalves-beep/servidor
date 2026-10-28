import express from "express";
const app = express();
app.use(express.json());

let livros = [
    {id: 1 , nome:"Livro1", autor:"autor1"},
    {id: 2 , nome:"Livro2", autor:"autor2"},
    {id: 3 , nome:"Livro3", autor:"autor3"}
]

app.get('/livros',(req, res) => {
    res.json(livros);
});

app.get('/livros/:id',(req, res) => {
    const idUrl = req.params.id;
    const id = Number(idUrl);
    const livro = livros.find(()=>{
        return livro.id === id;
    });
    res.json(livro);
});

app.post('/livros', (req,res)=>{
    const livro = {
        id:livros.length + 1,
        nome: req.body.nome,
        autor: req.body.autor,
    };
    livros.push(livro);
    res.send("livro criado")
});

app.put('/livros/:id', (req,res)=>{
    const idUrl = req.params.id;
    const id = Number(idUrl);
    const index = livros.findIndex((livro)=>{
        return livro.id === id;
    });
    livros[index] = {
        id: id,
        nome: req.body.nome,
        autor: req.body.autor,
    };
    res.send("atualizado com sucesso")
});

app.delete("/livros:id", (req,res)=>{
    const idUrl = req.params.id;
    const id = Number(idUrl);
    
})







app.listen(3000, ()=>{
    console.log("servidor rodando");
});



