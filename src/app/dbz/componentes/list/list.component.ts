import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Output()
public eliminarPersonaje:  EventEmitter<string> = new EventEmitter();

@Input()
public characterList: Character[] = [
  {
    nombre: 'Trunks',
    poder: 10
  }];

  emitirPersonajeEliminar(id? : string):void{
    if ( !id ) return;
    console.log(id);
    this.eliminarPersonaje.emit(id);
  }


}
