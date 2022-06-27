import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  result: number | string = 0;
  n1 = 0;
  n2 = 0;

  constructor() {}

  ngOnInit(): void {}

  handleSum() {
    this.result = this.n1 + this.n2;
  }

  handleSub() {
    this.result = this.n1 - this.n2;
  }

  handleMultiply() {
    this.result = this.n1 * this.n2;
  }

  handleDiv() {
    if (this.n2 === 0) return (this.result = 'Error');
    return (this.result = this.n1 / this.n2);
  }
}
