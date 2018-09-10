import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './components/player/player.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MainListItemComponent } from './components/main-list-item/main-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainListComponent,
    PlayerComponent
  ],
  declarations: [
    PlayerComponent, 
    MainListComponent, 
    MainListItemComponent
  ]
})
export class SharedModule { }
