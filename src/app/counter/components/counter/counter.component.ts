import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public counter: number = 10;

  incrementable(numero: number): void{
  this.counter += numero;
  }

  decrementar(numero: number): void {
    this.counter -= numero;
  }
 
  resetear(): void {
   this.counter = 10;
  }

}
