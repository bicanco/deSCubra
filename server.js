const { Pool, Client } = require('pg')
const express = require("express")
//const login = require("./routes/login.js")
// Setup banco e ports

const app = express();
app.set("port", process.env.PORT || 3001);

const bd = new Pool({
  user: 'juliana',
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

// query teste para ver se banco esta conectando
bd.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})
