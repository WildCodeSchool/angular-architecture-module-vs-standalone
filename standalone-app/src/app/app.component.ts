import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // On retrouve le "standalone: true"
  // Comme tu le sais, un composant "standalone" est un composant qui n'est pas déclaré dans un module, il est "standalone", i.e "seul", "sans module", "importable partout"
  // C'est la nouvelle façon de créer des composants Angular, et tu dois normalement être désormais familier avec ce principe.
  standalone: true,
  // Ici j'importe le composant HomeComponent, le FormsModule et le RouterOutlet : ce sont les trois imports dont j'ai besoin pour ce composant
  // Mon AppComponent est donc "souverrain", il n'appartient à aucun module et importe ses propres dépendances ; i.e ce dont il a besoin pour fonctionner
  imports: [HomeComponent, FormsModule, RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username: string = '';
}
