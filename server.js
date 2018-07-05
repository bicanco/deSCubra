const { Pool, Client } = require('pg')
const express = require("express")
//const login = require("./routes/login.js")
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
app.get("/admLogin", (req, res) => {
  const user = req.query.u
  const password = req.query.p

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

app.get("/expLogin", (req, res) => {
  const email = req.query.e
  const name = req.query.n

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

  const q1 = 'select * from explorador where email = $1 and nome = $2'
  const values = [email, name]

  // callback
  bd.query(q1, values, (err, q_res) => {
    console.log(err, q_res)
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
        bd.query(q2, values, (err, q_res) => {
          console.log(err, q_res)
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

app.post("/uploadImage", (req, res) =>{

})

app.get("/addParada", (req, res) => {
  const percurso = req.query.p
  const nome = req.query.n
  const descricao = req.query.d
  const enigma = req.query.e
  const respostas = req.query.r
  const imagem = req.query.i

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
    if (err) {
      console.log("Erro ao procurar o max value")
      console.log(err.stack)
    } else {
      if(q_res.rowCount == 1){
        console.log("Busca max realizada com sucesso")
        if(!q_res.rows[0]){
          cod: 0
        } else{
          cod: q_res.rows[0] + 1
        }
      }
    }
  })

  const add = 'insert into parada values ($1, $2, $3, $4, $5, $6, $7)'
  const values = [percurso, cod, nome, descricao, enigma, respostas, imagem]

  // callback
  bd.query(add, values, (err, q_res) => {
    console.log(err, q_res)
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

app.get("/addPercurso", (req, res) => {
  const nome_prev = req.query.pn
  const nome_curr = req.query.cn
  const descricao = req.query.d
  const imagem = req.query.i

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
          if (err) {
            console.log("Erro ao cadastrar percurso")
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

app.get("/removePercurso", (req, res) => {
  if(!nome){
    res.json({
      error: "Missing required parameter `n`"
    });
  }
  const remove = "delete from percurso where nome = $1";
  const value = nome;

  bd.query(remove, value, (err,q_res) =>{
    if(err){
      console.log("Erro ao remover percurso");
      console.log(err.stack);
    }
  });
});

// query teste para ver se banco esta conectando
bd.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})
