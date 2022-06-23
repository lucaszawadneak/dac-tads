import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
})
export class SomaComponent implements OnInit {
  private result = 0;

  somaForm = this.formBuilder.group({
    e1: 0,
    e2: 0,
  });

  constructor(
    private somaService: SomaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    console.log('oi');
    const { e1, e2 } = this.somaForm.value;
    if (!e1 || !e2) return;

    this.result = this.somaService.somar(e1, e2);
  }

  get resultado(): string {
    return this.result.toString();
  }
}
