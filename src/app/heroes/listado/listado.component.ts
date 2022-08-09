import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroeBorrado: string = '';

  constructor() { }


  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';


  }
}
