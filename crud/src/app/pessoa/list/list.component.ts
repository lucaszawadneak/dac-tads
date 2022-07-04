import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pessoas: Pessoa[] = [];
  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }

  remover(id: number | undefined): void {
    if (!id) return;
    this.pessoaService.excluir(id);
  }
}
