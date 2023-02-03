const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.use(cors);

app.post('/user', (req, res) => {
    res.json({msg: 'success'});
});


app.listen(5000);
console.log('Connecting to server');