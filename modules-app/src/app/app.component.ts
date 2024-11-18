import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // Tu vois qu'ici, il n'y a ni "standalone: true", ni "imports: []"
  // C'est normal, car il ne s'agit pas d'un composant "standalone", mais d'un composant déclaré dans un module.
  // Pour les imports, tout se passe donc dans le fichier app.module.ts.
  // Tous les éléments importés dans le fichier app.module.ts seront disponibles pour tous les composants déclarés dans ce module.
})
export class AppComponent {
  username: string = "";
}
