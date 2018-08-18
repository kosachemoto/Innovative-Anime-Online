import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoViewModule } from './modules/demo-view';

import { AppComponent } from './app.component';
import { DemoViewPlayerComponent } from './modules/demo-view/containers/demo-view-player';

const routes = [
  {
    path: "demo-view",
    component: DemoViewPlayerComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoViewModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
