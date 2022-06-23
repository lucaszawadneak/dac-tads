import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './soma';
import { SomaService } from './services';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SomaComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SomaComponent],
  providers: [SomaService],
})
export class SomaModule {}
