// Importa os decorators
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// É uma classe que mapeia para uma tabela de banco de dados
@Entity()
export class User {
    // Cria uma coluna primário cujo valor será gerado automaticamente e auto incrementado
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: number;

    @Column()
    cpf: string;
}