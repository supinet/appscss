import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  public pessoa: Pessoa;
  public pessoas: Array<Pessoa> = new Array<Pessoa>();

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.newPessoa();
  }

  addPessoa() {
    this.pessoaService.addPessoa(this.pessoa);
    this.newPessoa();
  }

  removePessoa(id: number) {
    this.pessoaService.removePessoa(id);
  }

  editPessoa(pessoa: Pessoa) {
    return this.pessoaService.editPessoa(pessoa);
  }

  newPessoa() {
    this.pessoa = new Pessoa();
  }

}
