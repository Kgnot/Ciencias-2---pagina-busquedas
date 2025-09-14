import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BinarySearchService implements Searchable {

  array!: (number | null)[];


  setArray(array: (number | null)[]) {
    this.array = array;
  }

  addNumber(num: number) {
    this.array.push(num);
  }

  deleteNumber(index: number) {
    this.array.splice(index, 1);
  }

  findNumber(num: number): number {
    this.array.sort((a, b) => {
      if (a === null && b === null) return 0;
      if (a === null) return -1;
      if (b === null) return 1;
      return a - b;
    });
    const index = this.binarySearch(0, this.array.length - 1, num);

    return index;
  }

  private binarySearch(start: number, finish: number, num: number): number {

    if (start === finish) {
      return this.array[start] === num ? start : -1;
    }
     if (start > finish) {
      return -1;
    }
    const middle = Math.floor((start + finish) / 2);
    const middleNum = this.array[middle];

    if (middleNum === num) {
      return middle;
    }

    if (middleNum === null) {
      return -1;
    }

    if (middleNum < num) {
      return this.binarySearch(middle + 1, finish, num);
    } else {
      return this.binarySearch(start, middle - 1, num);
    }
  }
}
