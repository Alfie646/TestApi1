const express = require('express');
const app = express();

const PORT = process.env.PORT || 3300;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1> BIENVENIDO A LA API</h1>');
});


//Iniciando el server para dar servicio del API
app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
});