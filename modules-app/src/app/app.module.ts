import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

// Tu découvres ici une nouvelle annotation : @NgModule. Elle permet de déclarer un module Angular.
// Elle comporte généralement :
// 👉 un tableau de déclarations, regroupant les composants liés à ce module (et uniquement lui)
// 👉 un tableau d'imports, regroupant les modules dont dépend ce module (comme le FormsModule, que tu connais bien)
// 👉 un tableau de providers, regroupant les providers des services utilisés dans ce module (On n'en a pas beaucoup parlé ; ça a été remplacé par le app.config.ts et les méthodes provide() dans l'architecture orientée standalones)
@NgModule({
  declarations: [
    AppComponent, // On déclare le composant AppComponent, il est donc utilisable partout dans ce module
    HomeComponent, // On déclare le composant HomeComponent, il est donc utilisable partout dans ce module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // On importe le FormsModule, il est utilisable par tous les composants déclarés dans ce module, i.e le AppComponent et le HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
