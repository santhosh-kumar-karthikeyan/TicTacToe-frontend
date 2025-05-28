import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnService {
  players: string[];
  _currPlayer: number;
  constructor() { 
    this.players = ["Guest", "CPU"];
    this._currPlayer = 0;
  }
  get currPlayer() {
    return this.players[this._currPlayer];
  }
  set currPlayer(newPlayer: string) {
    this._currPlayer = this.players.indexOf(newPlayer);
  }
  switchTurn() {
    this._currPlayer = this._currPlayer == 0 ? 1 : 0;
  }
}
