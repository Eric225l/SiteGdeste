require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.get("/sistema", (req, res)=>{
    res.send("servidor");
    res.sendStatus(201);
})

server.listen(port, ()=>{
    console.log("Servidor abriu");
});