import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 0;
  counterSignal = signal(10);

  public increment(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  public resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
