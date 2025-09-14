import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-array-visualizer',
  imports: [],
  templateUrl: './array-visualizer.html',
  styleUrl: './array-visualizer.scss'
})
export class ArrayVisualizer {
  @Input({required: true}) array: (number | null)[] = [];

  displayValue(item: number | null): string | number {
    return item === null || item === undefined ? '' : item;
  }

}
