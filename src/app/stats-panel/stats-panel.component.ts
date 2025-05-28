import { Component,Input } from '@angular/core';
import { TurnService } from '../turn.service';

@Component({
  selector: 'app-stats-panel',
  standalone: false,
  templateUrl: './stats-panel.component.html',
  styleUrl: './stats-panel.component.css'
})
export class StatsPanelComponent {
  lastMove: {x: number, y: number};
  @Input() playerName!: string;
  constructor(private turnService: TurnService) {
    this.playerName = "Guest";
    this.lastMove = { x : -1, y : -1};
  }
  isTurnDisabled() {
    return this.playerName === this.turnService.currPlayer ? 1 : 0.1;    
  }
}
