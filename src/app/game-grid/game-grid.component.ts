import { Component, OnInit } from '@angular/core';
import { TurnService } from '../turn.service';

@Component({
  selector: 'game-grid',
  standalone: false,
  templateUrl: './game-grid.component.html',
  styleUrl: './game-grid.component.css'
})
export class GameGridComponent implements OnInit{
  clock!: number; // simulates the move count, odd count corresponding to players and even to the CPU
  gameGrid: number[][] = Array(3).fill(null).map(() => Array(3).fill(-1)) // represents the cell states, with 1 for X, 0 for O and -1 for empty.
  playerChar!: string;
  //intialises the gameGrid with -1's in all rows and columns
  ngOnInit(): void {
    this.clock = 1;
    //this.gameGrid = Array(3).fill(Array(3).fill(-1));  Using this logic would cause it to create referential arrays thus making 
    //it update values in the whole column when one value is changed.
    this.gameGrid = Array(3).fill(null).map(() => Array(3).fill(-1));
    //this initialises the grid correctly with independent arrays as oppposed to before solving the bug of values changing across rows.
    console.log("initial state: ",this.gameGrid);
    this.playerChar = 'X';
  }
  constructor(private turnService: TurnService) {}
  placeMove(i:number, j: number) {
      if(this.gameGrid[i][j] != -1)
        return;
      console.log("Game state before playing: ",this.gameGrid);
      console.log("player's turn");
      this.playerMove(i,j);
      console.log("CPU turn");
      this.cpuMove();
  }
  getBestCpuMove(): number[]  {
    const emptyRowIndex: number = this.gameGrid.findIndex(row => row.includes(-1));
    if(emptyRowIndex !== -1) {
      const emptyColIndex: number = this.gameGrid[emptyRowIndex].indexOf(-1);
      return [emptyRowIndex,emptyColIndex];
    }
    return [-1,-1];
  }
  cpuMove() {
    const [i,j] = this.getBestCpuMove();
    console.log("Row index for CPU movement: ",i);
    console.log("Col Index for CPU movement: ",j);
    this.gameGrid[i][j] = this.playerChar === 'X' ? 0 : this.playerChar === 'O' ? 1 : -1;
    console.log("game state: ",this.gameGrid);
    console.log("Assumed to be single cell: ", this.gameGrid[i][j]);
    this.turnService.switchTurn();
  }
  playerMove(i:number,j:number) {
    console.log("Row index for Player movement: ",i);
    console.log("Col index for Player movement: ",j);
    this.gameGrid[i][j] = this.playerChar === 'X' ? 1 : this.playerChar === 'O' ? 0 : -1;
    console.log("Game state after player placement: ",this.gameGrid);
    console.log("Assumed to be single cell: ", this.gameGrid[i][j]);
    this.turnService.switchTurn();
  }
}
