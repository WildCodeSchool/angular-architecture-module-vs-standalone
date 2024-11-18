import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user', loadComponent: () => import('./user/pages/admin-page/admin-page.component').then(m => m.AdminPageComponent)
    },
    {
        path: 'admin', loadComponent: () => import('./admin/pages/admin-page/admin-page.component').then(m => m.AdminPageComponent)
    }
];
