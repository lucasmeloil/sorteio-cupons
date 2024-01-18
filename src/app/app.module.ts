import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCuponsComponent } from './cadastro-cupons/cadastro-cupons.component';
import { CuponsCadastradosPesquisaComponent } from './cupons-cadastrados-pesquisa/cupons-cadastrados-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCuponsComponent,
    CuponsCadastradosPesquisaComponent
    // Remova SorteioComponent das declarações do AppModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
