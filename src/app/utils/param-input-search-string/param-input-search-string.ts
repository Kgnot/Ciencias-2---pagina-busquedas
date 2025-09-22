import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-param-input-search-string',
  template: `
    <div class="param-input">
      <label class="form-label">{{ label }}</label>
      <input
        type="text"
        class="form-input"
        [value]="value ?? ''"
        (input)="onInput($event)"/>

      <button class="btn-action" (click)="onClick()">
        {{ buttonText }}
      </button>

      <ng-container></ng-container>
    </div>
  `,
  styleUrl: './param-input-search-string.scss' // Si quieres usar el mismo estilo que ParamInputSearch
})
export class ParamInputSearchString {
  @Input({required: true}) label!: string;
  @Input({required: true}) buttonText!: string;
  @Input() value: string | null = null; // valor actual como string
  @Output() valueChange = new EventEmitter<string | null>();
  @Output() action = new EventEmitter<void>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value === '' ? null : input.value;
    this.valueChange.emit(inputValue);
  }

  onClick() {
    this.action.emit();
  }
}
