async function conectionDatabase(){
    if(global.connection){
        return global.connection.connect();
    }
    
    const {Pool} = require("pg")
    
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    })

    const client = await pool.connect();
    console.log("conexão com o banco");

    const res = await client.query("select now()");

    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}

conectionDatabase();

async function databaseInsertMember(user){
    const client = await conectionDatabase();
    const sql = "INSERT INTO membros(nome, time, curso, status, lattes) VALUES ($1, $2, $3, $4, $5)";
    const values = [user.nome, user.time, user.curso, user.status, user.lattes];
    const res = await client.query(sql, values);
}

async function databaseVisualizeMember(){
    const client = await conectionDatabase();
    const sql = "SELECT * FROM membros ORDER BY id";
    const res = await client.query(sql);
    return res.rows;
}

async function databaseDeleteMember(id){
    const client = await conectionDatabase();
    const sql = "DELETE FROM membros WHERE id=$1";
    const values = [id];
    const res = await client.query(sql, values)
}

module.exports = {
    databaseInsertMember,
    databaseVisualizeMember,
    databaseDeleteMember
}