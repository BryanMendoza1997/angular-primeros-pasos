import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public nombreHeroes: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public heroeliminado?:string;

  eliminarHeroe(): void{
    this.heroeliminado = this.nombreHeroes.pop();
  }

}
