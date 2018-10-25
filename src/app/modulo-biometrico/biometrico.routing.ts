import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
export const biometricoRoutes: Routes = [
    {
        path: '',
        component: ListaComponent,
        data: {
            pageTitle: 'Lista de catalogos'
        },        
    },
];

export const biometricocdRouting = RouterModule.forChild(biometricoRoutes);

