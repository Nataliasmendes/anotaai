import { Sequelize } from "sequelize";
import "dotenv/config.js";

const dbNome = process.env.DB_NOME;
const dbUsuario = process.env.DB_USUARIO;
const dbSenha = process.env.DB_SENHA;
const dbHost = process.env.DB_HOST;
const dbPorta = process.env.PORTA_DB;

const sequelize = new Sequelize(
    dbNome,
    dbUsuario,
    dbSenha,
    {
        dialect: "mysql",
        host: dbHost,
        port: dbPorta //se tiver só uma porta não precisa indicar
    }
);

// sequelize.query("SELECT * FROM tb_anotacao")
//     .then(([resultados]) => {
//         console.log(resultados);
//     })
//     .catch((erro) => console.log(erro));



export { sequelize }; //nomeado
// //export {Sequelize}; //export nomeado, ou seja, na hora de importar, precisa ter o nome que está declarado no arquivo de origem.