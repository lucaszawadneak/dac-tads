import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './pessoa/edit/edit.component';
import { InsertComponent } from './pessoa/insert/insert.component';
import { ListComponent } from './pessoa/list/list.component';
import { ContainerComponent } from './shared/components/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'pessoas',
        redirectTo: 'pessoas/list',
      },
      {
        canActivate: [AuthGuard],
        data: {
          role: 'ADMIN,GENRENTE,FUNC',
        },
        path: 'pessoas/list',
        component: ListComponent,
      },
      {
        canActivate: [AuthGuard],
        data: {
          role: 'ADMIN,GENRENTE',
        },
        path: 'pessoas/novo',
        component: InsertComponent,
      },
      {
        canActivate: [AuthGuard],
        data: {
          role: 'ADMIN,GENRENTE',
        },
        path: 'pessoas/:id',
        component: EditComponent,
      },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
