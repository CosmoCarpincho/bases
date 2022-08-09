import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hola mundo esta es mi primer variable conectada';
  contador: number = 0;
  acumulador2: number = 0;
  base: number = 10;

  
  acumular(valor: number): void {
   this.contador += valor ; 
  }

}
