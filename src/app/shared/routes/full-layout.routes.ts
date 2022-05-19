import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../asisco/asisco.module').then(m => m.AsiscoModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('../../asisco/asisco.module').then(m => m.AsiscoModule)
  }
];
