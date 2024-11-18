import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // On chargera le module "admin" que si l'utilisateur visite la page "/admin" (grâce à loadChildren)
  // Et charger le module "Admin" signifie charger son module "routing". En effet, chaque module à son propre module de routing !
  // Donc le module "Admin" a son propre module de routing qui s'appelle "AdminRoutingModule"
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  // Idem pour user
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
];

// Il s'agit bien d'un module Angular ici
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
