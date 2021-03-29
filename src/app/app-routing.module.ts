import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'home-perfil',
    loadChildren: () => import('./home-perfil/home-perfil.module').then( m => m.HomePerfilPageModule)
  },
  {
    path: 'bem-vindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then( m => m.BemVindoPageModule)
  },
  {
    path: 'depoimentos',
    loadChildren: () => import('./depoimentos/depoimentos.module').then( m => m.DepoimentosPageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./dicas/dicas.module').then( m => m.DicasPageModule)
  },
  {
    path: 'dicas-saude',
    loadChildren: () => import('./dicas-saude/dicas-saude.module').then( m => m.DicasSaudePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
