// Conexão com a FonteDeDados do banco typeORM
import { DataSource } from "typeorm";
import { User } from "../entities/user";

// Configuração do banco de dados
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "API-CRUD",
    // Indica quais são as entidades
    entities: [User],
    // Ou
    // entities: ["src/entities/*.ts"]

    // Não recomendado em desenvolvimento profissional
    synchronize: true
});