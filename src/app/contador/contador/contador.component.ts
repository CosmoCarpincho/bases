import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    
        <h1>{{title}}</h1>
        <button (click)="contador = contador +1">+1</button>

        <span>{{contador}}</span>

        <button (click)="contador = contador -1">-1</button>


        <label for="acumulador">Acumulador</label>
        <input type="number" id="acumulador" name="acumulador2" >
        <button (click)="acumular(base)">+{{base}}</button>

        <span>{{contador}}</span>

        <button (click)="acumular(-base)">-{{base}}></button>

        <div>
        <span>{{acumulador2}}</span>
        </div>
    
    `

})
export  class ContadorComponent {
    title: string = "Mi contador en Angular"        
    contador: number = 0;
    base: number = 10;
    acumulador2: number = 4;

    acumular(valor: number){
        this.contador += valor;

    }
}