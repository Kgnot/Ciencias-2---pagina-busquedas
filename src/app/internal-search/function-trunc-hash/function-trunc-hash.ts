import { Component } from '@angular/core';
import {DropdownCollision} from '../../utils/dropdown-collission/dropdown-collision.component';
import {ParamInputSearch} from '../../utils/param-input-search/param-input-search';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {HashEntry} from '../function-module-hash/function-hash-module.component';
import {ParamInputSearchString} from '../../utils/param-input-search-string/param-input-search-string';

@Component({
  selector: 'app-function-trunc-hash',
  imports: [
    DropdownCollision,
    ParamInputSearch,
    TitlePageComponent,
    ParamInputSearchString
  ],
  templateUrl: './function-trunc-hash.html',
  styleUrl: './function-trunc-hash.scss'
})
export class FunctionTruncHash {

  // Estados del componente
  tableSize: number | null = 7; // Tamaño por defecto
  keyToAdd: number | null = null;
  keyToSearch: number | null = null;

  // Nuevas propiedades para truncamiento (agregar al componente)
  keyLength: number | null = null; // Longitud deseada de las claves
  positionsToUse: string = ''; // Posiciones a usar (ej: "1,3" o "2,4")
  selectedPositions: number[] = []; // Array de posiciones parseadas

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


  // funciones extra

  // Nuevos métodos de manejo de cambios
  onKeyLengthChange(length: number | null) {
    this.keyLength = length;
  }

  onPositionsChange(positions: string | null) {
    this.positionsToUse = positions || '';
  }

  updateKeyLength() {
    if (this.keyLength && this.keyLength > 0) {
      this.message = `Longitud de claves configurada a ${this.keyLength} dígitos`;
    } else {
      this.message = 'Por favor ingresa una longitud válida';
    }
  }

  updatePositions() {
    if (!this.positionsToUse.trim()) {
      this.message = 'Por favor especifica las posiciones a usar (ej: 1,3 o 2,4)';
      return;
    }

    try {
      // Parsear las posiciones (convertir de string a array de números)
      this.selectedPositions = this.positionsToUse
        .split(',')
        .map(pos => parseInt(pos.trim()))
        .filter(pos => !isNaN(pos) && pos > 0); // Solo números válidos y positivos

      if (this.selectedPositions.length === 0) {
        this.message = 'No se encontraron posiciones válidas. Usa formato: 1,3 o 2,4';
        return;
      }

      this.message = `Posiciones configuradas: ${this.selectedPositions.join(', ')}`;
    } catch (error) {
      this.message = 'Error al parsear las posiciones. Usa formato: 1,3 o 2,4';
    }
  }

// Función para mostrar las posiciones configuradas
  displayPositions(): string {
    return this.selectedPositions.length > 0
      ? this.selectedPositions.join(', ')
      : 'No configuradas';
  }

// Función hash truncamiento (reemplaza la función hashFunction existente)
  hashFunction(key: number): number {
    if (!this.tableSize || !this.keyLength || this.selectedPositions.length === 0) {
      return 0;
    }

    // Convertir clave a string y asegurar la longitud
    let keyStr = key.toString();

    // Rellenar con ceros a la izquierda si es necesario
    while (keyStr.length < this.keyLength) {
      keyStr = '0' + keyStr;
    }

    // Truncar si es más largo que la longitud deseada
    if (keyStr.length > this.keyLength) {
      keyStr = keyStr.substring(0, this.keyLength);
    }

    // Extraer los dígitos de las posiciones seleccionadas
    let truncatedValue = '';
    for (const position of this.selectedPositions) {
      const index = position - 1; // Convertir a índice base 0
      if (index >= 0 && index < keyStr.length) {
        truncatedValue += keyStr[index];
      }
    }

    // Si no se pudo extraer ningún dígito, devolver 0
    if (!truncatedValue) return 0;

    // Convertir a número y aplicar módulo
    const hashValue = parseInt(truncatedValue) % this.tableSize;
    return hashValue;
  }

// Método addKey modificado para mostrar el proceso de truncamiento
  addKey() {
    if (!this.keyToAdd || this.tableSize === null) {
      this.message = 'Por favor ingresa una clave válida';
      return;
    }

    if (!this.keyLength || this.selectedPositions.length === 0) {
      this.message = 'Por favor configura la longitud de claves y las posiciones a usar';
      return;
    }

    // Mostrar el proceso de truncamiento
    let keyStr = this.keyToAdd.toString();

    // Rellenar/truncar según longitud configurada
    const originalKey = keyStr;
    while (keyStr.length < this.keyLength) {
      keyStr = '0' + keyStr;
    }
    if (keyStr.length > this.keyLength) {
      keyStr = keyStr.substring(0, this.keyLength);
    }

    // Extraer dígitos de posiciones seleccionadas
    let truncatedValue = '';
    const extractedDigits: string[] = [];
    for (const position of this.selectedPositions) {
      const index = position - 1;
      if (index >= 0 && index < keyStr.length) {
        const digit = keyStr[index];
        truncatedValue += digit;
        extractedDigits.push(`pos${position}=${digit}`);
      }
    }

    const hashIndex = this.hashFunction(this.keyToAdd);

    // Verificar si la posición está libre
    if (this.hashTable[hashIndex].status === 'empty' || this.hashTable[hashIndex].status === 'deleted') {
      this.hashTable[hashIndex] = {
        key: this.keyToAdd,
        value: this.keyToAdd,
        status: 'occupied'
      };
      this.message = `Clave ${this.keyToAdd} agregada en posición ${hashIndex}`;
    } else {
      this.message = `Colisión: La posición ${hashIndex} ya está ocupada por la clave ${this.hashTable[hashIndex].key}`;
    }
  }
}
