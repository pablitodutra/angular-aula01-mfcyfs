// Módulo necessário para que a aplicação possa ser desenhada em um navegador Web
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


@NgModule({
  imports : [BrowserModule], // outros módulos usados
  exports : [], // tornar visível um componente, pipe...
  providers : [], // conjunto de serviços que estarão disponíveis para este módulo
  declarations : [], // conjunto de componentes do módulo
  bootstrap : [] // é o conjunto de componentes pelo qual a aplicação web iniciará execução
})

export class AppModule {

}