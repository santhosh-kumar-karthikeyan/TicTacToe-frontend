import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameGridComponent } from './game-grid/game-grid.component';
import { PlayerSymbolPipe } from './player-symbol.pipe';
import { StatsPanelComponent } from './stats-panel/stats-panel.component';
import { StatusModalComponent } from './status-modal/status-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GameGridComponent,
    PlayerSymbolPipe,
    StatsPanelComponent,
    StatusModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
