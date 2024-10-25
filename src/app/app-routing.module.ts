import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vista-principal',
    pathMatch: 'full',
  },
  {
    path: 'acerca-de',
    loadChildren: () =>
      import('./acerca-de/acerca-de.module').then((m) => m.AcercaDePageModule),
  },
  {
    path: 'prediccion-genero',
    loadChildren: () =>
      import('./prediccion-genero/prediccion-genero.module').then(
        (m) => m.PrediccionGeneroPageModule
      ),
  },
  {
    path: 'vista-principal',
    loadChildren: () =>
      import('./vista-principal/vista-principal.module').then(
        (m) => m.VistaPrincipalPageModule
      ),
  },
  {
    path: 'prediccion-edad',
    loadChildren: () =>
      import('./prediccion-edad/prediccion-edad.module').then(
        (m) => m.PrediccionEdadPageModule
      ),
  },
  {
    path: 'universidades-pais',
    loadChildren: () =>
      import('./universidades-pais/universidades-pais.module').then(
        (m) => m.UniversidadesPaisPageModule
      ),
  },
  {
    path: 'clima-rd',
    loadChildren: () =>
      import('./clima-rd/clima-rd.module').then((m) => m.ClimaRdPageModule),
  },
  {
    path: 'noticias-wordpress',
    loadChildren: () =>
      import('./noticias-wordpress/noticias-wordpress.module').then(
        (m) => m.NoticiasWordpressPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
