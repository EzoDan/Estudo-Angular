import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { LerListas } from './components/ler-listas/ler-listas';
import { Emitter } from './components/Emissao/emitter/emitter';
import { ItemDetail } from './components/item-detail/item-detail';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'listas', component: LerListas },
  { path: 'listas/:id', component: ItemDetail }, // inicia uma rota dinâmica
  { path: 'emission', component: Emitter }
];


//esse jeito serve para fazer usando o normal, nao o standalone components

/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { LerListas } from './components/ler-listas/ler-listas';


export const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'listas', component: LerListas}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)], //fala que todas as rotas comecam pela raiz
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}*/