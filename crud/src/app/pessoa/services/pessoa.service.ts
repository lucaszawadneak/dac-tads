import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_KEY = 'pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_KEY];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  buscarPorId(id: number): Pessoa | undefined {
    const pessoas = this.listarTodos();
    const index = pessoas.findIndex((p) => p.id == id);
    return pessoas[index];
  }

  inserir(pessoa: Pessoa) {
    const pessoas = this.listarTodos();

    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage[LS_KEY] = JSON.stringify(pessoas);
  }

  atualizar(pessoa: Pessoa) {
    const pessoas = this.listarTodos();
    const index = pessoas.findIndex((p) => p.id === pessoa.id);
    pessoas[index] = pessoa;
    localStorage[LS_KEY] = JSON.stringify(pessoas);
  }

  excluir(id: number) {
    const pessoas = this.listarTodos();
    const index = pessoas.findIndex((p) => p.id === id);
    pessoas.splice(index, 1);
    localStorage[LS_KEY] = JSON.stringify(pessoas);
  }
}
