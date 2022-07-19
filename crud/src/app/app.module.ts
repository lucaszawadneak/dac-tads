import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { NumericoDirective } from './shared/directives/numerico.directive';
import { ContainerComponent } from './shared/components/container/container.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericoDirective,
    ContainerComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, PessoaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
