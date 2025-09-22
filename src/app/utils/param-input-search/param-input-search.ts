import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';

@Component({
  selector: 'app-param-input-search',
  imports: [],
  templateUrl: './param-input-search.html',
  styleUrl: './param-input-search.scss'
})
export class ParamInputSearch {
  @Input({required: true}) label!: string;
  @Input({required: true}) buttonText!: string;
  @Input() value: number | null = null; // valor actual
  @Output() valueChange = new EventEmitter<number|null>();
  @Output() action = new EventEmitter<void>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value === '' ? null : input.valueAsNumber;
    this.valueChange.emit(inputValue);
  }

  onClick() {
    this.action.emit();
  }
}
