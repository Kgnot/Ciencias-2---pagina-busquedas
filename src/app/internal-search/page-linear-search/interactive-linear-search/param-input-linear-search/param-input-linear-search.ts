import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-param-input-linear-search',
  imports: [],
  templateUrl: './param-input-linear-search.html',
  styleUrl: './param-input-linear-search.scss'
})
export class ParamInputLinearSearch {
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
