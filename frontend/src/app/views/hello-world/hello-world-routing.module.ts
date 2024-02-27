import {HelloWorldComponent} from './hello-world.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HelloWorldComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HelloWorldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloWorldRoutingModule {
}
