const { Pool } = require("pg")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

async function conectionDatabase(){  
    try{
        const client = await pool.connect();
        console.log("conexão com o banco");

        const res = await client.query("select now()");
        console.log(res.rows[0]);

        return client;

    }catch(err){
        console.log(`ERRO de conexão: ${err}`)
        throw err;
    }
    
}

conectionDatabase();

async function databaseInsertMember(user){
    let client;
    try{
        client = await conectionDatabase();
        const sql = "INSERT INTO membros(nome, time, curso, status, lattes) VALUES ($1, $2, $3, $4, $5)";
        const values = [user.nome, user.time, user.curso, user.status, user.lattes];
        const res = await client.query(sql, values);
    }catch(err){
        console.log(`ERRO de operação post: ${err}`)
        throw err;
    }finally{
        if(client){
            client.release();
        }
    }
    
}

async function databaseVisualizeMember(){
    let client;
    try{
        client = await conectionDatabase();
        const sql = "SELECT * FROM membros ORDER BY id";
        const res = await client.query(sql);
        return res.rows;
    }catch(err){
        console.log(`ERRO de operação get: ${err}`);
        throw err;
    }finally{
        if(client){
            client.release();
        }
    }
    
}

async function databaseDeleteMember(id){
    let client;
    try{
        client = await conectionDatabase();
        const sql = "DELETE FROM membros WHERE id=$1";
        const values = [id];
        const res = await client.query(sql, values)
    }catch(err){
        console.log(`ERRO de operação patch: ${err}`);
    }finally{
        if(client){
            client.release();
        }
    }
    
}

module.exports = {
    databaseInsertMember,
    databaseVisualizeMember,
    databaseDeleteMember
}