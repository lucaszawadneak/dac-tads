import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';
import { EditComponent } from './edit/edit.component';

import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ListComponent, InsertComponent, EditComponent],
  imports: [CommonModule, RouterModule, FormsModule, NgxMaskModule.forRoot()],
  providers: [PessoaService],
})
export class PessoaModule {}
