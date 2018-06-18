module.exports = (bd) => (req, res) {
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
}
