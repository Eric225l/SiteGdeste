require("dotenv").config();

const database = require("./conexaoDatabase");
const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.get("/sistema", async (req, res)=>{
    const members = await database.databaseVisualize();
    res.json(members);
})

server.post("/sistema", async (req, res)=>{
    console.log("dados enviados")
    await database.databaseInsert(req.body);
    res.sendStatus(201);
})

server.listen(port, ()=>{
    console.log("Servidor abriu");
});