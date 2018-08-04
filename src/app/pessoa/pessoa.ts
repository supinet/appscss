import { IPessoa } from './ipessoa';

export class Pessoa implements IPessoa {
    public id: number;
    public nome: string;
    public cpfCnpj: string;
    public email: string;
    public photo: string;

    constructor(id?: number, nome?: string, cpfCnpj?: string, email?: string, photo?: string) {
        this.id = id;
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.email = email;
        this.photo = photo;
    }
}
