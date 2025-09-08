import {Component, signal} from '@angular/core';
import {ArrayVisualizer} from '../../../utils/array-visualizer/array-visualizer';
import {ParamInputLinearSearch} from './param-input-linear-search/param-input-linear-search';

@Component({
  selector: 'app-interactive-linear-search',
  imports: [
    ArrayVisualizer,
    ParamInputLinearSearch
  ],
  templateUrl: './interactive-linear-search.html',
  styleUrl: './interactive-linear-search.scss'
})
export class InteractiveLinearSearch {
  protected generated = signal(false);
  protected listSize = signal<number | null>(null);
  protected array = signal<(number | null)[]>([]);
  // for secuancial search
  protected index = signal<number>(-1);
  protected findValue = signal<number | null>(null);
  protected searchPerformed = signal(false);
  // to add number dynamic
  protected newNumber = signal<number | null>(null);


  activeGenerate(): void {
    const size = this.listSize() ?? 0;
    if (size > 0) {
      this.array.set(new Array(size).fill(null));
      this.generated.set(true);
      this.index.set(-1);
      this.searchPerformed.set(false);
    }
  }

  updateArray(update: { value: number | null, index: number }): void {
    this.array.update(currentArray => {
      const newArray = [...currentArray];
      newArray[update.index] = update.value;
      return newArray;
    });
  }

  findNumber(): void {
    const target = this.findValue();
    this.index.set(-1);
    this.searchPerformed.set(true);

    if (target == null) return;

    for (let i = 0; i < (this.listSize() ?? 0); i++) {
      if (this.array()[i] === target) {
        this.index.set(i);
        break;
      }
    }
  }

  // section to add number:
  addNumber() {
    const num = this.newNumber();
    this.array.update(currentArray => {
      const newArray = [...currentArray];
      for (let i = 0; i <= newArray.length; i++) {
        if (i === newArray.length) {
          window.alert("No hay mas espacios en memoria")
          break;
        }
        if (newArray[i] === null) {
          newArray[i] = num;

          break;
        }
      }
      return newArray;
    });
  }


}
