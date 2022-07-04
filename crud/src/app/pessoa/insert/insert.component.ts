import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class InsertComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;

  constructor(private pessoaService: PessoaService, private router: Router) {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  inserir(): void {
    if (this.formPessoa.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
