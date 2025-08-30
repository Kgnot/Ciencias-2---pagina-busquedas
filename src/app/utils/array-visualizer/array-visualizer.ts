import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-array-visualizer',
  imports: [],
  templateUrl: './array-visualizer.html',
  styleUrl: './array-visualizer.scss'
})
export class ArrayVisualizer {
  @Input({required: true}) array: (number | null)[] = [];
  @Output() arrayChange = new EventEmitter<{ value: number | null, index: number }>();

  displayValue(item: number | null): string | number {
    return item === null || item === undefined ? '' : item;
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value === '' ? null : input.valueAsNumber;
    this.arrayChange.emit({ value: value, index: index });
  }
}
