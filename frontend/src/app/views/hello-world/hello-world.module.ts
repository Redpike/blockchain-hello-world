import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelloWorldComponent} from './hello-world.component';
import {HelloWorldRoutingModule} from './hello-world-routing.module';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    HelloWorldRoutingModule
  ]
})
export class HelloWorldModule {
}
