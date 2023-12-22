import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      &copy; Saeid Mohadjer 2023
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
