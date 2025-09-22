import {Component, inject, Input, signal} from '@angular/core';
import {ArrayVisualizer} from '../array-visualizer/array-visualizer';
import {ParamInputSearch} from '../param-input-search/param-input-search';

@Component({
  selector: 'app-interactive-search',
  standalone: true,
  imports: [ArrayVisualizer, ParamInputSearch],
  templateUrl: './interactive-search.component.html',
  styleUrl: './interactive-search.component.scss'
})
export class InteractiveSearch {
  @Input({required: true}) strategy!: Searchable;

  protected generated = signal(false);
  protected listSize = signal<number | null>(null);
  protected index = signal<number>(-1);
  protected findValue = signal<number | null>(null);
  protected searchPerformed = signal(false);
  protected newNumber = signal<number | null>(null);

  protected keyLength: number | null = null;

  protected get array(): (number | null)[] {
    return this.strategy.array; // devolvemos el valor ya evaluado
  }

  activeGenerate(): void {
    const size = this.listSize() ?? 0;
    if (size > 0) {
      this.strategy.setArray(Array(size).fill(null));
      this.generated.set(true);
      this.index.set(-1);
      this.searchPerformed.set(false);
    }
  }

  updateArray(update: { value: number | null, index: number }): void {
    const current = [...this.array];
    if (typeof update.value === 'number') {
      current[update.index] = update.value;
    }
    this.strategy.setArray(current);
  }

  findNumber(): void {
    const target = this.findValue();
    this.index.set(-1);
    this.searchPerformed.set(true);

    if (target == null) return;

    const idx = this.strategy.findNumber(+target);
    this.index.set(idx);
  }

  addNumber(): void {
    const num = this.newNumber();
    if (num == null) return;

    if (this.keyLength != null && num.toString().length !== this.keyLength) {
      window.alert(`Número inválido. Debe tener exactamente ${this.keyLength} dígitos.`);
      return;
    }

    this.strategy.addNumber(num);
  }

  protected validateButton(){
    window.alert("Validaste correctamente")
  }
}
