import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  // Ici, j'importe de nouveau le FormsModule, comme dans le AppComponent. 
  // Contrairement à une architecture orientée modules, chaque composant doit importer ses propres dépendances,
  // tandis que dans une architecture orientée modules, les dépendances sont importées dans le scope du module qui les rend disponibles à tous les composants qui y sont déclarés.
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 username: string = '';
}
