import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, HomeComponent, RouterModule, FooterComponent],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>
  </main>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'World';
}
