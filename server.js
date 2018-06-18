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

// query teste para ver se banco esta conectando
bd.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})
