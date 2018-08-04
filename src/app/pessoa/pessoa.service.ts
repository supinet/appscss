import { Pessoa } from './pessoa';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoas: Pessoa[];
  private nextId: number;

  constructor() {
    const pessoas = this.getPessoas();

    if (pessoas.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = pessoas[pessoas.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addPessoa(p: Pessoa): void {
    const pessoa = new Pessoa(this.nextId, p.nome, p.cpfCnpj, p.email, p.photo);
    const pessoas = this.getPessoas();
    pessoas.push(pessoa);
    this.setLocalStoragePessoas(pessoas);
    this.nextId++;
  }

  public removePessoa(id: number): void {
    let pessoas = this.getPessoas();
    pessoas = pessoas.filter((pessoa) => pessoa.id !== id);
    this.setLocalStoragePessoas(pessoas);
  }

  public editPessoa(pessoa: Pessoa) {
    console.log(`pessoa on service => `, pessoa);
    return JSON.parse(localStorage.getItem('pessoa'));
  }

  public getPessoas(): Pessoa[] {
    const localStorageItem = JSON.parse(localStorage.getItem('pessoas'));
    return localStorageItem == null ? [] : localStorageItem.pessoas;
  }

  private setLocalStoragePessoas(pessoas: Pessoa[]): void {
    localStorage.setItem('pessoas', JSON.stringify({ pessoas: pessoas }));
  }
}
