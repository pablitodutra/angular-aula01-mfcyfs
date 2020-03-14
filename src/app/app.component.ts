import {Component} from '@angular/core';

// Decorador para transformar essa classe em um componete
@Component({
  selector : 'app-main', // seletor HTML
  templateUrl : './app.component.html', // HTML do componente
  styleUrls : [] // Estilos que serão carregados à página
})

export class AppComponent {
 // Atributo 
 titulo : string;

 // Construtor da classe 
 constructor(){
   this.titulo = "Título da minha aplicação";
 }
}