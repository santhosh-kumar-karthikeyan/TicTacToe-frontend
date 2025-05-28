import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckWinService {
  winningCombos!: number[][][];
  constructor() { 
    this.winningCombos = [
      [[0,0],[0,1],[0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]], // row combos
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[1,3]], // col combos
      [[0,0],[1,1],[2,2]],
      [[2,0],[2,1],[2,2]]  //diag combos
    ]
  }
  hasWon(gameGrid: number[][]): number {
    for(const combo of this.winningCombos) {
      const first = gameGrid[combo[0][0]][combo[0][1]];
      const gameWon =  first !== -1 && combo.every(([r,c]) => gameGrid[r][c] === first);
      if(gameWon)
        return first;
    }
    return -1;
  }
}
