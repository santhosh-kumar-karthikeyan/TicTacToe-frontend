import { Component } from '@angular/core';

@Component({
  selector: 'game-grid',
  standalone: false,
  templateUrl: './game-grid.component.html',
  styleUrl: './game-grid.component.css'
})
export class GameGridComponent {
  gameGrid: number[][] = Array(3).fill(Array(3).fill(-1)); // represents the cell states, with 1 for X, 0 for O and -1 for empty.
  //intialises the gameGrid with -1's in all rows and columns
}
