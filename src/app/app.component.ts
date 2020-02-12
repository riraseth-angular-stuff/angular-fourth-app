import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
oddNumbers: number[] = [];
evenNumbers: number[] = [];
  onCounterUp(counterValue: number) {
    if (counterValue % 2 === 0){
      this.evenNumbers.push(counterValue);
    } else {
      this.oddNumbers.push(counterValue);
    }
  }
}
