const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'));

app.get('/video', (req, res) => {
    res.download('./public/sintel.mp4');
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});