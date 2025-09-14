import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import cytoscape, { Core } from 'cytoscape';

@Component({
  selector: 'app-graph',
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('cyContainer', { static: true }) cyContainer!: ElementRef;
  private cy!: Core;

  ngAfterViewInit(): void {
    this.cy = cytoscape({
      container: this.cyContainer.nativeElement,
      elements: [
        { data: { id: 'A', label: 'Vértice A' } },
        { data: { id: 'B', label: 'Vértice B' } },
        { data: { id: 'AB', source: 'A', target: 'B' } }
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': (ele) => this.getColorByLevel(ele.data('level')),
            'label': 'data(label)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center',
            'width': 60,
            'height': 60
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: { name: 'circle' }
    });

    // Evento de click en nodo
    this.cy.on('tap', 'node', (evt: { target: any; }) => {
      const node = evt.target;
      this.onNodeClick(node.id());
    });
  }

  private getColorByLevel(level: number = 0): string {
    const colors = ['#2196f3', '#4caf50', '#ff9800', '#e91e63'];
    return colors[level % colors.length];
  }

  private onNodeClick(nodeId: string): void {
    if (nodeId === 'A') {
      // expandir hijos de A dinámicamente
      this.cy.add([
        { data: { id: 'A1', label: 'Tema A1', level: 1 } },
        { data: { id: 'A2', label: 'Tema A2', level: 1 } },
        { data: { id: 'A1-edge', source: 'A', target: 'A1' } },
        { data: { id: 'A2-edge', source: 'A', target: 'A2' } }
      ]);
      this.cy.layout({ name: 'breadthfirst', directed: true }).run();
    }

    if (nodeId.startsWith('A1')) {
      alert(`Abrir modal del nodo ${nodeId}`);
      // aquí puedes usar Angular Material Dialog en lugar de alert()
    }
  }
}
