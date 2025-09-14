class ReadonlySignal<T> {
}

interface Searchable {
  array: (number | null)[];
  deleteNumber: (index: number) => void;
  addNumber: (num: number) => void;
  findNumber: (num: number) => number;
  setArray: (array: (number | null)[]) => void;
}
