import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[numerico]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true,
    },
  ],
})
export class NumericoDirective implements Validator, OnInit {
  constructor(private el: ElementRef) {}

  @Input('valorMinimo') valorMinimo: string = '0';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  validate(c: FormControl): ValidationErrors | null {
    let v: number = +c.value;

    const errorObject = {
      minimo: true,
      requiredValue: 18,
    };
    if (isNaN(v) || v < 18) {
      return errorObject;
    }

    return null;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: any) {
    let valor = event?.target?.value;

    valor = valor.replace(/[\D]/g, '');

    event.target.value = valor;
  }
}
