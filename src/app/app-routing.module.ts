import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bemvindo',
    pathMatch: 'full'
  },
  {
    path: 'form01',
    loadChildren: () => import('./form01/form01.module').then( m => m.Form01PageModule)
  },
  {
    path: 'form02',
    loadChildren: () => import('./form02/form02.module').then( m => m.Form02PageModule)
  },
  {
    path: 'homeperfil',
    loadChildren: () => import('./home-perfil/home-perfil.module').then( m => m.HomePerfilPageModule)
  },
  {
    path: 'bemvindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then( m => m.BemVindoPageModule)
  },
  {
    path: 'depoimentos',
    loadChildren: () => import('./depoimentos/depoimentos.module').then( m => m.DepoimentosPageModule)
  },
  {
    path: 'dicas-saude',
    loadChildren: () => import('./dicas-saude/dicas-saude.module').then( m => m.DicasSaudePageModule)
  },
  {
    path: 'conquistas',
    loadChildren: () => import('./conquistas/conquistas.module').then( m => m.ConquistasPageModule)
  },  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
