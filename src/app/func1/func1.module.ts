import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations : [Comp1Component], //Componentes do módulo
  exports : [], // compomentes visíveis a outros módulos
  imports : [CommonModule], // Quais módulos serão importados aqui
})
export class Func1Module{}