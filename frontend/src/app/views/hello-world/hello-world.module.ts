import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelloWorldComponent} from './hello-world.component';
import {HelloWorldRoutingModule} from './hello-world-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HelloWorldRoutingModule
  ]
})
export class HelloWorldModule {
}
