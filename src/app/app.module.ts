// Módulo necessário para que a aplicação possa ser desenhada em um navegador Web
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

@NgModule({
  imports : [BrowserModule], // outros módulos usados
  exports : [], // tornar visível um componente, pipe...
  providers : [], // conjunto de serviços que estarão disponíveis para este módulo
  declarations : [AppComponent], // conjunto de componentes do módulo
  bootstrap : [AppComponent] // é o conjunto de componentes pelo qual a aplicação web iniciará execução
})

export class AppModule {

}