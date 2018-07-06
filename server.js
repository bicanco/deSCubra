const { Pool, Client } = require('pg')
const express = require("express")
// Setup banco e ports

const app = express();
app.set("port", process.env.PORT || 3001);

const bd = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'deSCubra',
  password: 'password',
  port: 5433,
})
bd.connect()

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});

// Middleware
// login do adiministrador no banco
app.get("/admLogin", (req, res) => {
  const user = req.query.u
  const password = req.query.p

  //checagem de erro
  if (!user) {
    res.json({
      error: "Missing required parameter `u`"
    });
    return;
  }
  if (!password) {
    res.json({
      error: "Missing required parameter `p`"
    });
    return;
  }

  const text = 'select * from administrador where usuario = $1 and senha = $2'
  const values = [user, password]

  // callback
  bd.query(text, values, (err, q_res) => {
    console.log(err, q_res)
    //checagem de erro
    if (err) {
      console.log(err.stack)
    } else {
      if(q_res.rows[0]){
        res.json({
          sucess: "True"
        });
      } else {
        res.json({
        sucess: "False"
        });
      }
    }
  })
})

//login do explorador no banco
app.get("/expLogin", (req, res) => {
  const email = req.query.e
  const name = req.query.n

  //checagem de erro
  if (!email) {
    res.json({
      error: "Missing required parameter `e`"
    });
    return;
  }
  if (!name) {
    res.json({
      error: "Missing required parameter `n`"
    });
    return;
  }

  const q1 = 'select * from explorador where email = $1'
  const values1 = [email]
  const values2 = [email, name]
  // callback
  bd.query(q1, values1, (err, q_res) => {
    console.log(err, q_res)
    //checagem de erro
    if (err) {
      console.log("Erro ao buscar explorador")
      console.log(err.stack)
    } else {
      if(q_res.rows[0]){
        res.json({
          sucess: "True"
        });
      } else {
        const q2 = 'insert into explorador(email, nome) values ($1, $2)'
        bd.query(q2, values2, (err, q_res) => {
          console.log(err, q_res)
          //checagem de erro
          if (err) {
            console.log("Erro ao cadastrar explorador")
            console.log(err.stack)
          } else {
            if(q_res.rowCount == 1){
              res.json({
                sucess: "True"
              });
            } else {
              res.json({
              sucess: "False"
              });
            }
          }
        })
      }
    }
  })
})

//adicionar uma parada no banco
app.get("/addParada", (req, res) => {
  const percurso = req.query.p
  const nome = req.query.n
  const descricao = req.query.d
  const enigma = req.query.e
  const respostas = req.query.r
  const imagem = req.query.i

  //checagem de erro
  if (!percurso) {
    res.json({
      error: "Missing required parameter `p`"
    });
    return;
  }
  if (!nome) {
    res.json({
      error: "Missing required parameter `n`"
    });
    return;
  }
  if (!descricao) {
    res.json({
      error: "Missing required parameter `d`"
    });
    return;
  }
  if (!enigma) {
    res.json({
      error: "Missing required parameter `e`"
    });
    return;
  }
  if (!respostas) {
    res.json({
      error: "Missing required parameter `r`"
    });
    return;
  }
  if (!imagem) {
    res.json({
      error: "Missing required parameter `i`"
    });
    return;
  }

  const nextcod = 'select max(codigo) from parada where percurso = $1'
  const value = [percurso]
  var cod = 0

  // find max cod
  bd.query(nextcod, value, (err, q_res) => {
    console.log(err, q_res)
    //checagem de erro
    if (err) {
      console.log("Erro ao procurar o max value")
      console.log(err.stack)
    } else {
      //checagem de erro
      if(q_res.rowCount == 1){
        console.log("Busca max realizada com sucesso")
        if(!q_res.rows[0]){
          cod = 0
        } else{
          cod = q_res.rows[0] + 1
        }
      }
    }
  })

  const add = 'insert into parada values ($1, $2, $3, $4, $5, $6, $7)'
  const values = [percurso, cod, nome, descricao, enigma, respostas, imagem]

  // callback
  bd.query(add, values, (err, q_res) => {
    console.log(err, q_res)
    //checagem de erro
    if (err) {
      console.log("Erro ao cadastrar parada")
      console.log(err.stack)
    } else {
      if(q_res.rowCount == 1){
        res.json({
          sucess: "True"
        });
      } else {
        res.json({
        sucess: "False"
        });
      }
    }
  })
})

//selecionar as informacoes de uma parada
app.get("/selectParada", (req, res) =>{
  const percurso = req.query.p
  const id = req.query.i
  //checagem de erro
  if (!percurso) {
    res.json({
      error: "Missing required parameter `p`"
    });
    return;
  }
  if (!id) {
    res.json({
      error: "Missing required parameter `i`"
    });
    return;
  }

  const query ={
    text: "select nome,descricao,pergunta,resposta,imagem from parada where percurso = $1 and codigo = $2",
    values: [percurso,id],
    rowMode: 'array',
  }
  bd.query(query, (err,q_res) => {
    //checagem de erro
    if(err){
      console.log("Erro ao selecionar parada")
      console.log(err.stack)
    }else{
      res.json({
        sucess: 'True',
        nome: q_res.rows[0][0],
        descricao: q_res.rows[0][1],
        pergunta: q_res.rows[0][2],
        resposta: q_res.rows[0][3],
        imagem: q_res.rows[0][4],
      })
    }
  })
})

//remover uma parada do banco
app.get("/removeParada", (req,res) => {
  const nome = req.query.n

  //checagem de erro
  if(!nome){
    res.json({
      error: "Missing required parameter `n`"
    });
  }

  const remove = "delete from parada where nome = $1";
  const value = [nome];

  bd.query(remove, value, (err, q_res) =>{
    //checagem de erro
    if(err){
      console.log("Erro ao remover percurso");
      console.log(err.stack);
    } else{
      if(q_res.rowCount === 1){
        res.json({
          sucess: "True"
        })
      } else{
        res.json({
          sucess: "False"
        })
      }
    }
  })
})

//identificar qual eh a última parada do percurso
app.get("/lastParada", (req, res) => {
  const percurso = req.query.p
  //checagem de erro
  if (!percurso) {
    res.json({
      error: "Missing required parameter `p`"
    });
    return;
  }

  const query ={
    text: "select max(codigo) from parada where percurso = $1",
    values: [percurso],
    rowMode: 'array',
  }

  bd.query(query, (err, q_res) =>{
    //checagem de erro
    if(err){
      console.log("Erro ao remover percurso");
      console.log(err.stack);
    } else{
        res.json({
          sucess: "True",
          lastParada: q_res.rows[0][0],
        })
    }
  })
})

//adicionar um percurso no banco
app.get("/addPercurso", (req, res) => {
  const nome_prev = req.query.pn
  const nome_curr = req.query.cn
  const descricao = req.query.d
  const imagem = req.query.i

  //checagem de erro
  if (!nome_prev) {
    res.json({
      error: "Missing required parameter `pn`"
    });
    return;
  }
  if (!nome_curr) {
    res.json({
      error: "Missing required parameter `cn`"
    });
    return;
  }
  if (!descricao) {
    res.json({
      error: "Missing required parameter `d`"
    });
    return;
  }
  if (!imagem) {
    res.json({
      error: "Missing required parameter `i`"
    });
    return;
  }

  const alter = 'update percurso set nome = $1, descricao = $2, imagem = $3  where nome = $4'
  const value = [nome_curr, descricao, imagem, nome_prev]

  // callback
  bd.query(alter, value, (err, q_res) => {
    console.log(err, q_res)
    //checagem de erro
    if (err) {
      console.log("Erro ao alterar percurso")
      console.log(err.stack)
    } else {
      if(q_res.rowCount == 0){
        res.json({
          sucess: "True"
        });
      } else{
        const add = 'insert into percurso values ($1,$2,$3)'
        values = [nome_curr, descricao, imagem]
        bd.query(add, values, (err, q_res) => {
          console.log(err, q_res)
          //checagem de erro
          if (err) {
            console.log("Erro ao cadastrar percurso")
            console.log(err.stack)
          } else {
            if(q_res.rowCount === 1){
              res.json({
                sucess: "True"
              });
            } else {
              res.json({
                sucess: "False"
              });
            }
          }
        })
      }
    }
  })
})

app.get("/selectPerc", (req, res) => {
  const nome = req.query.n
  if (!nome) {
    res.json({
      error: "Missing required parameter `n`"
    });
    return;
  }

  const query1 ={
    text: "select nome, descricao, imagem from percurso where nome = $1",
    values: [nome],
    rowMode: 'array',
  }

  bd.query(query1, (err,q_res) => {
    if(err){
      console.log("Erro ao selecionar percurso")
      console.log(err.stack)
    }else{
      if(q_res.rowCount === 1){
        res.json({
          sucess: "True",
          nome: q_res.rows[0][0],
          descricao: q_res.rows[0][1],
          imgScr: q_res.rows[0][2]
        })
      } else{
        res.json({
          sucess: "False"
        })
      }
    }
  })
})

app.get("/selectParadas", (req, res) =>{
  const percurso = req.query.p
  if (!percurso) {
    res.json({
      error: "Missing required parameter `n`"
    });
    return;
  }

  const query2 ={
    text: "select nome from parada where percurso = $1",
    values: [percurso],
    rowMode: 'array',
  }

  bd.query(query2, (err, q_res) => {
    if(err){
      console.log("Erro ao selecionar paradas")
      console.log(err.stack)
    }else{
      if(q_res.rowCount !== 0){
        res.json({
          sucess: "True",
          paradas: q_res.rows
        })
      } else{
        res.json({
          sucess: "False"
        })
      }
    }
  })
})

app.get("/selectPercurso", (req, res) => {
  const percurso = req.query.p

  if (!percurso) {
    res.json({
      error: "Missing required parameter `p`"
    });
    return;
  }

  const query ={
    text: "select pe.nome, pe.descricao, count(pa.codigo) from percurso pe, parada pa where pe.nome = pa.percurso and pe.nome = $1 group by pe.nome, pe.descricao",
    values: [percurso],
    rowMode: 'array',
  }

  bd.query(query, (err, q_res) => {
    if(err){
      console.log("Erro ao buscar informacoes do percurso")
      console.log(err.stack)
    } else{
      console.log(q_res)
      if(q_res.rowCount !== 0){
        res.json({
          sucess: "True",
          percursos: q_res.rows
        })
      } else{
        res.json({
          sucess: "False"
        })
      }
    }
  })
})

//remover um percurso do banco
app.get("/removePercurso", (req, res) => {
  const nome = req.query.n

  //checagem de erro
  if(!nome){
    res.json({
      error: "Missing required parameter `n`"
    });
  }
  const remove = "delete from percurso where nome = $1";
  const value = nome;
  bd.query(remove, value, (err,q_res) =>{
    //checagem de erro
    if(err){
      console.log("Erro ao remover percurso");
      console.log(err.stack);
    } else {
      if(q_res.rowCount === 1){
        res.json({
          sucess: "True"
        });
      } else {
        res.json({
          sucess: "False"
        });
      }
    }
  })
})

//listar os perucrsos no banco
app.get("/listPercursos", (req, res) => {
  const query = {
    text: 'select * from percurso',
    rowMode: 'array',
  };

  bd.query(query, (err, q_res) => {
    console.log(err, q_res)
    //checagem de erro
    if (err) {
      console.log("Erro ao selecionar percursos")
      console.log(err.stack)
    } else {
      console.log(q_res.rows[0][0])
      res.json({
        percursos: q_res.rows,
        sucess: "True"
      });
    }
  })
})

// query teste para ver se banco esta conectando
bd.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})
