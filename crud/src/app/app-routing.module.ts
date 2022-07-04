import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pessoa/edit/edit.component';
import { InsertComponent } from './pessoa/insert/insert.component';
import { ListComponent } from './pessoa/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas/list',
    pathMatch: 'full',
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/list',
  },
  {
    path: 'pessoas/list',
    component: ListComponent,
  },
  {
    path: 'pessoas/novo',
    component: InsertComponent,
  },
  {
    path: 'pessoas/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
