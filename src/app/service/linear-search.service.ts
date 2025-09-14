import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinearSearchService implements Searchable {
  private numArray = signal<(number | null)[]>([]);

  get array() {
    return this.numArray()//asReadonly();
  }

  setArray(array: (number | null)[]) {
    this.numArray.set(array);
  }

  addNumber(num: number) {
    this.numArray.update(arr => {
      const repeated = arr.find(item => item === num);
      if (repeated) {
        window.alert('la clave ya existe');
        return [...arr];
      }
      const index = arr.findIndex(item => item === null);

      if (index !== -1) {
        arr[index] = num;
      } else {
        window.alert('No hay más espacios en memoria');
      }
      return [...arr];
    });
  }

  deleteNumber(index: number) {
    this.numArray.update(arr => arr.filter((_, i) => i !== index));
  }

  findNumber(num: number): number {
    return this.numArray().findIndex(item => item === num);
  }
}
