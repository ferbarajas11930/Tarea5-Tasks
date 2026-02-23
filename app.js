const express = require('express');
const taskRouters = require('./routers/tasks');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/task', taskRouters);
app.get("/",(req,res)=>{
    res.json("Mi primer backend");
});

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
