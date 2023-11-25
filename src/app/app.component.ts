import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, HomeComponent],
  template: `
    <main class="main">
      <section class="test">
        <h1>Hello {{ title }}!</h1>
        <app-counter></app-counter>
      </section>
      <app-home></app-home>

      <p><a href="https://github.com/smohadjer/angular101">GitHub</a></p>
    </main>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'World';
}
