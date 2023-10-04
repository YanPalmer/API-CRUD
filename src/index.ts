import "reflect-metadata";
// Importa as configurações do banco
import { AppDataSource } from "./database/data-source";

console.log("Inicializando...");
setTimeout(() => main(), 2000)

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Banco configurado");
    } catch (error) {
        console.error("Erro ao conectar", error);
    }
}