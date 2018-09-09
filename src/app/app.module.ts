import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestModule } from './modules/test';

import { AppComponent } from './app.component';
import { TestMainComponent } from './modules/test/containers/test-main';

const routes = [
  {
    path: "test-main",
    component: TestMainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
