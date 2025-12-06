
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

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
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_criacao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        data_finalizacao: {
            type: DataTypes.DATE,
            allowNull: true
        },
        finalizada: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },

    {
        tableName: "tb_anotacao",
        timestamps: false //se não desabilita, ocorrem erros
    }
);

export default Anotacao;