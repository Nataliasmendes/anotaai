import express from "express";
import { sequelize } from "./config/db.js";
import routesAnotacao from "./routes/anotacaoRoute.js";


const app = express();//1
app.use(express.json()); //2
app.use("/", routesAnotacao)


sequelize.authenticate()
    .then(() => console.log("Banco autenticado com sucesso"))
    .catch((error) => console.log("Falha na autenticação: " + error))

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
