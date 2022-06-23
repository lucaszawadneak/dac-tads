import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomaService {
  constructor() {}

  somar(e1: number, e2: number): number {
    return e1 + e2;
  }
}
