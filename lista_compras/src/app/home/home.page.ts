import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista = []; //estrutura de LISTA, permite adcionar e remover de forma DINÂMICA.
  texto: string = "";     //variavel
  
  adiciona() { //chama metodo do html, já está ligada.
    if (!(this.texto == "")){             // (!()) NEGAÇÃO\INVERSO
      this.variavel_lista.push(this.texto); ////CONDICIONAL :se o texto estiver vazio, faça nada. SE estiver preenchido adiciona
      this.texto = ""; 
    }

     /*
    if (this.texto == "") {

    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }*/

    //this.variavel_lista.push(this.texto); //variavel fora do metodo(THIS)acessar, (PUSH) empurrar a informação.
   // this.texto = "";
  }

  //*ngFor = "let elemento_da_lista of variavelLista" no item (COMANDO DE REPETIÇÃO) (ngFor declarar uma lista; let declara uma variavel; percorre cada elemento por vez da lista)
  //[(ngModel)]="texto" no input (comando interno do Angular, linkar a variavel "texto" TS E HTML)

}
