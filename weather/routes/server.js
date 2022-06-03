var express = require('express');
var app = express();
app.get('/submit', (rep, res) => {
    res.send('Hi! I just created a server using express.js')
})
app.listen(3000, () => {
    console.log('Server running in port 3000. Visit http://localhost:3000')
})