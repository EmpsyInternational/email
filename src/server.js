const express =  require('express');
const cors = require('cors');
const app = express();
const _var = require('./global/_var');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const routes = require('./routes/hack.routes');

app.listen(_var.PORT, (err) => {
    if(err) throw err;
    console.log(`servidor inicializado en el puerto: http://localhost:${_var.PORT}`);
})

app.use(routes)