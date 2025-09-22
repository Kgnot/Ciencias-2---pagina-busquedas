import { Component } from '@angular/core';
import {DropdownCollision} from '../../utils/dropdown-collission/dropdown-collision.component';
import {ParamInputSearch} from '../../utils/param-input-search/param-input-search';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {HashEntry} from '../function-module-hash/function-hash-module.component';

@Component({
  selector: 'app-function-plegamiento-hash',
  imports: [
    DropdownCollision,
    ParamInputSearch,
    TitlePageComponent
  ],
  templateUrl: './function-plegamiento-hash.html',
  styleUrl: './function-plegamiento-hash.scss'
})
export class FunctionPlegamientoHash {

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

    // Convertir clave a string
    const keyStr = key.toString();

    // Determinar tamaño del segmento basado en el tamaño de la tabla
    const segmentSize = this.tableSize.toString().length;

    // Dividir la clave en segmentos
    const segments: string[] = [];
    for (let i = 0; i < keyStr.length; i += segmentSize) {
      segments.push(keyStr.substring(i, i + segmentSize));
    }

    // Sumar todos los segmentos
    const sum = segments.reduce((total, segment) => {
      return total + parseInt(segment);
    }, 0);

    // Aplicar módulo para asegurar que esté en rango
    return sum % this.tableSize;
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

  addKey() {
    if (!this.keyToAdd || this.tableSize === null) {
      this.message = 'Por favor ingresa una clave válida';
      return;
    }

    // Mostrar el proceso del plegamiento
    const keyStr = this.keyToAdd.toString();
    const segmentSize = this.tableSize.toString().length;

    // Crear los segmentos para mostrar
    const segments: string[] = [];
    for (let i = 0; i < keyStr.length; i += segmentSize) {
      segments.push(keyStr.substring(i, i + segmentSize));
    }

    // Calcular la suma
    const sum = segments.reduce((total, segment) => total + parseInt(segment), 0);
    const hashIndex = this.hashFunction(this.keyToAdd);

    // Verificar si la posición está libre
    if (this.hashTable[hashIndex].status === 'empty' || this.hashTable[hashIndex].status === 'deleted') {
      this.hashTable[hashIndex] = {
        key: this.keyToAdd,
        value: this.keyToAdd,
        status: 'occupied'
      };
      this.message = `Clave ${this.keyToAdd} agregada en posición ${hashIndex}. Proceso: [${segments.join(', ')}] → ${segments.join(' + ')} = ${sum} → ${sum} % ${this.tableSize} = ${hashIndex}`;
    } else {
      this.message = `Colisión: La posición ${hashIndex} ya está ocupada por la clave ${this.hashTable[hashIndex].key}. Proceso: [${segments.join(', ')}] → ${sum} % ${this.tableSize} = ${hashIndex}`;
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
