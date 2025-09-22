import {Component} from '@angular/core';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {DropdownCollision} from '../../utils/dropdown-collission/dropdown-collision.component';
import {ParamInputSearch} from '../../utils/param-input-search/param-input-search';

export interface HashEntry {
  key: number;
  value: number;
  status: 'occupied' | 'empty' | 'deleted';
}

@Component({
  selector: 'app-function-module-hash',
  imports: [
    TitlePageComponent,
    DropdownCollision,
    ParamInputSearch
  ],
  templateUrl: './function-hash-module.component.html',
  styleUrl: './function-hash-module.component.scss'
})
export class FunctionHashModuleComponent {
  // Estados del componente
  tableSize: number | null = 7; // Tamaño por defecto
  keyToAdd: number | null = null;
  keyToSearch: number | null = null;

  // Estructura hash
  hashTable: HashEntry[] = [];

  // Mensajes de estado
  message: string = '';
  searchResult: string = '';

  constructor() {
    this.initializeTable();
  }

  // Inicializar tabla hash
  initializeTable() {
    if (this.tableSize && this.tableSize > 0) {
      this.hashTable = Array.from({ length: this.tableSize }, () => ({
        key: 0,
        value: 0,
        status: 'empty'
      }));
      this.message = `Tabla hash inicializada con ${this.tableSize} posiciones`;
    }
  }

  get occupiedCount(): number {
    return this.hashTable.filter(entry => entry.status === 'occupied').length;
  }

  get loadFactor(): string {
    if (this.hashTable.length === 0) return '0%';
    return ((this.occupiedCount / this.hashTable.length) * 100).toFixed(1) + '%';
  }


  // Función hash mod
  hashFunction(key: number): number {
    if (!this.tableSize) return 0;
    return key % this.tableSize;
  }

  // Manejar cambio de tamaño
  onTableSizeChange(size: number | null) {
    this.tableSize = size;
  }

  // Manejar cambio de clave a agregar
  onKeyToAddChange(key: number | null) {
    this.keyToAdd = key;
  }

  // Manejar cambio de clave a buscar
  onKeyToSearchChange(key: number | null) {
    this.keyToSearch = key;
  }

  // Crear/Redimensionar tabla
  createTable() {
    if (!this.tableSize || this.tableSize <= 0) {
      this.message = 'Por favor ingresa un tamaño válido para la tabla';
      return;
    }
    this.initializeTable();
  }

  // Agregar clave
  addKey() {
    if (!this.keyToAdd || this.tableSize === null) {
      this.message = 'Por favor ingresa una clave válida';
      return;
    }

    const hashIndex = this.hashFunction(this.keyToAdd);

    // Verificar si la posición está libre
    if (this.hashTable[hashIndex].status === 'empty' || this.hashTable[hashIndex].status === 'deleted') {
      this.hashTable[hashIndex] = {
        key: this.keyToAdd,
        value: this.keyToAdd,
        status: 'occupied'
      };
      this.message = `Clave ${this.keyToAdd} agregada en la posición ${hashIndex} (${this.keyToAdd} % ${this.tableSize} = ${hashIndex})`;
    } else {
      this.message = `Colisión: La posición ${hashIndex} ya está ocupada por la clave ${this.hashTable[hashIndex].key}`;
    }
  }

  // Buscar clave
  searchKey() {
    if (!this.keyToSearch || this.tableSize === null) {
      this.searchResult = 'Por favor ingresa una clave válida para buscar';
      return;
    }

    const hashIndex = this.hashFunction(this.keyToSearch);
    const entry = this.hashTable[hashIndex];

    if (entry.status === 'occupied' && entry.key === this.keyToSearch) {
      this.searchResult = `✓ Clave ${this.keyToSearch} encontrada en la posición ${hashIndex}`;
    } else {
      this.searchResult = `✗ Clave ${this.keyToSearch} no encontrada. Se buscó en la posición ${hashIndex}`;
    }
  }

  // Eliminar clave
  deleteKey(index: number) {
    if (this.hashTable[index].status === 'occupied') {
      const deletedKey = this.hashTable[index].key;
      this.hashTable[index] = {
        key: 0,
        value: 0,
        status: 'deleted'
      };
      this.message = `Clave ${deletedKey} eliminada de la posición ${index}`;
    }
  }

  // Limpiar tabla
  clearTable() {
    this.hashTable.forEach(entry => {
      entry.key = 0;
      entry.value = 0;
      entry.status = 'empty';
    });
    this.message = 'Tabla limpiada';
    this.searchResult = '';
  }
}
