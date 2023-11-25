import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div>Count: {{ count }}</div>
    <button (click)="increment()">Increment</button>{{' '}}
    <button (click)="decrement()">Decrement</button>
  `
})

export class CounterComponent {
  count = 0;

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }
}
