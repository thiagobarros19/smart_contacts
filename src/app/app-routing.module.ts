import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contact-form',
    loadChildren: () => import('./pages/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
  {
    path: 'group-form',
    loadChildren: () => import('./pages/group-form/group-form.module').then( m => m.GroupFormPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
