import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../servicios/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get personajes(): Character[] {
    return this.dbzService.personajes;
  }

  eliminarPersonaje(id: string):void{
    this.dbzService.eliminarPersonajePorId(id);
  }
  agregarPersonaje(personaje: Character):void{
    this.dbzService.agregarPersonaje(personaje);
  }
}
