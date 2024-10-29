import pg from 'pg';
const {Client}= pg;

const config={
    user: 'curriculum_db_rfof_user',
    host: 'dpg-csgm8mo8fa8c739083cg-a.oregon-postgres.render.com',
    database: 'curriculum_db_rfof',
    password: 'eZhRahvCMn93UyBahNvhKSLlpCAL31Hl',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos ")
    }catch(error){
        console.log(error)
    }
}