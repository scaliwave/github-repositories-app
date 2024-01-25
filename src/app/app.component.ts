import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReposListComponent } from './repos-list/repos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReposListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-repos-app';
}
