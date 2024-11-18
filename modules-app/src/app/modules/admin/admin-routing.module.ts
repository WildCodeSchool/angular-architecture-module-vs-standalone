import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  // Selon le app-routing.module.ts, le module "Admin" sera chargé si l'utilisateur visite la page "/admin"
  // Ici, lorsque "/admin" est visité, le composant "AdminPageComponent" est directement affiché
  {path: '', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
