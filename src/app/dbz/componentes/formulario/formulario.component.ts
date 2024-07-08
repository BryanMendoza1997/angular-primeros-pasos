import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    nombre: '',
    poder: 0,
  };

  emitirPersonaje(): void {
    if (this.character.nombre.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { nombre: '', poder: 0};
  }
}
