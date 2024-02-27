import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full'
  },
  {
    path: 'hello-world',
    title: 'HelloWorld Smart Contract',
    loadChildren: () => import('./views/hello-world/hello-world.module').then(m => m.HelloWorldModule)
  }
];
