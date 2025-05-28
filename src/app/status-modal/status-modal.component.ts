import { Component,Input } from '@angular/core';

@Component({
  selector: 'status-modal',
  standalone: false,
  templateUrl: './status-modal.component.html',
  styleUrl: './status-modal.component.css'
})
export class StatusModalComponent {
  @Input() hasWon: string;
  constructor() {
    this.hasWon = ' ';
  }
  
}
