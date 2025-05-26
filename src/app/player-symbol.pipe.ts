import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerSymbol',
  standalone: false
})
export class PlayerSymbolPipe implements PipeTransform {

  transform(value: number): string{
    return value === 1 ? "X" : value === 0 ? "O" : " ";
  }

}
