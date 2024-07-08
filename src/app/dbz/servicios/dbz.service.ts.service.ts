import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public personajes: Character[] = [
    {
      id: uuid(),
      nombre: 'Krilin',
      poder: 1000,
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 10.0,
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  agregarPersonaje(personaje: Character): void {
    const nuevoPersonaje: Character = {
      id: uuid(),
      nombre: personaje.nombre,
      poder: personaje.poder
    };

    this.personajes.push(nuevoPersonaje);
  }

/*   eliminarPersonaje(index: number): void {
    this.personajes.splice(index, 1);
  } */

    eliminarPersonajePorId( id: string ):void{
      this.personajes = this.personajes.filter( personaje => personaje.id !== id);
    }
}
