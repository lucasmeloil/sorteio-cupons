import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteioComponent } from './sorteio/sorteio.component';
import { CadastroCuponsComponent } from './cadastro-cupons/cadastro-cupons.component';
import { CuponsCadastradosPesquisaComponent } from './cupons-cadastrados-pesquisa/cupons-cadastrados-pesquisa.component';

const routes: Routes = [
  { path: 'sorteio', component: SorteioComponent },
  { path: 'cadastro-cupons', component: CadastroCuponsComponent },
  { path: 'cupons-cadastrados-pesquisa', component: CuponsCadastradosPesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
