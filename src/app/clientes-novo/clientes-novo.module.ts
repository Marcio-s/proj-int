import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesNovoPageRoutingModule } from './clientes-novo-routing.module';

import { ClientesNovoPage } from './clientes-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientesNovoPageRoutingModule
  ],
  declarations: [ClientesNovoPage]
})
export class ClientesNovoPageModule {}
