require("dotenv").config();

const database = require("./conexaoDatabase");
const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT;

server.use(cors({
    origin: "*",
    method: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus:200
}));
server.use(express.json());

server.get("/sistema", async (req, res)=>{
    const members = await database.databaseVisualizeMember();
    res.json(members);
})

server.post("/sistema", async (req, res)=>{
    await database.databaseInsertMember(req.body);
    res.send(201).json({message: "Dados criados"});
})

server.delete("/sistema/:id", async (req, res)=>{
    console.log(req.params.id)
    await database.databaseDeleteMember(req.params.id);
    res.send(204).json({message: "Dados deletados"});
})

server.listen(port, ()=>{
    console.log("Servidor abriu");
});