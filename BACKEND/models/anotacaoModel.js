import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Anotacao = sequelize.define(
    "Anotacao",
    {
        id_anotacao: {
            type: DataTypes.INTEGER, //tipo do atributo
            primaryKey: true,       //chave primaria
            autoIncrement: true,    //auto incremento
            allowNull: false,     //não pode ser nulo
        },
        descricao: {
            type: DataTypes.STRING(1000),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        }
    }
);