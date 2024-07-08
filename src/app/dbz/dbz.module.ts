import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './paginas/main-page.component';
import { ListComponent } from '../dbz/componentes/list/list.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, ListComponent, FormularioComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
