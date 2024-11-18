import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  // Selon le app-routing.module.ts, le module "User" sera chargé si l'utilisateur visite la page "/user"
  // Ici, lorsque "/user" est visité, le composant "UserPageComponent" est directement affiché
  { path: '', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
