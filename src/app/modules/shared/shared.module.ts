import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import { MainListComponent } from './components/main-list/main-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlayerComponent, MainListComponent]
})
export class SharedModule { }
