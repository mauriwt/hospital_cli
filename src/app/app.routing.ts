/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";
import { AuthResolver } from './ModuloAutenticacion/auth.resolve';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'catalogos', pathMatch: 'full',
      },
      {path: 'catalogos', loadChildren: 'app/modulo-biometrico/biometrico.module#BiometricoModule',data:{pageTitle: 'Catalogos'}, resolve:[AuthResolver]},
      //{path: 'inventarios', loadChildren: 'app/ModuloInventario/inventario.module#InventarioModule',data:{pageTitle: 'Inventarios'}},
    ]
  },
  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/ModuloAutenticacion/auth.module#AuthModule'},
  {path: '**', redirectTo: 'auth'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
