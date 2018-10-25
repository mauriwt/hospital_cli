import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { biometricocdRouting } from './biometrico.routing';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { ObservableService, CRUDService } from 'app/providers';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    biometricocdRouting, 
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaComponent],
  providers: [ObservableService, CRUDService]
})
export class BiometricoModule { }
