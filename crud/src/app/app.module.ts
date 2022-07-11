import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { NumericoDirective } from './shared/directives/numerico.directive';

@NgModule({
  declarations: [AppComponent, NumericoDirective],
  imports: [BrowserModule, AppRoutingModule, PessoaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
