import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TestMainComponent } from './containers/test-main';

import { SharedModule } from '../shared/shared.module';

const routes = [
  {
    path: "",
    component: TestMainComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    TestMainComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class TestModule { }
