// Módulo necessário para que a aplicação possa ser desenhada em um navegador Web
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MeuComponente1Component} from './meucomponente1/meucomponente1.component';
import {Func1Module} from './func1/func1.module';


@NgModule({
  imports : [BrowserModule, Func1Module, FormsModule], // outros módulos usados
  exports : [], // tornar visível um componente, pipe...
  providers : [], // conjunto de serviços que estarão disponíveis para este módulo
  declarations : [AppComponent,MeuComponente1Component], // conjunto de componentes do módulo
  bootstrap : [AppComponent] // é o conjunto de componentes pelo qual a aplicação web iniciará execução
})

export class AppModule {

}
 