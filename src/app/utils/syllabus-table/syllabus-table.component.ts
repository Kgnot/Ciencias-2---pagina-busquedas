import {Component, inject, Input, signal} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {SyllabusService} from '../../service/syllabus.service';

@Component({
  selector: 'app-syllabus-table',
  standalone: true,
  imports: [MatTableModule, MatIcon],
  templateUrl: './syllabus-table.component.html',
  styleUrl: './syllabus-table.component.scss'
})
export class SyllabusTableComponent {
  @Input() title: string = '';
  private syllabusService = inject(SyllabusService);
  private root!: SyllabusNode;
  columnsToDisplay = ['label'];
  visibleData = signal<SyllabusNode[]>([]);

  ngOnInit() {
    this.root = this.syllabusService.getSyllabus();
    this.visibleData.set(this.flatten(this.root.children ?? []));
  }

  private flatten(nodes: SyllabusNode[]): SyllabusNode[] {
    const result: SyllabusNode[] = [];

    const traverse = (node: SyllabusNode, parentExpanded: boolean) => {
      if (parentExpanded) result.push(node);

      if (node.children?.length && node.expanded) {
        node.children.forEach(child => traverse(child, true));
      }
    };

    nodes.forEach(n => traverse(n, true));
    return result;
  }

  toggle(node: SyllabusNode) {
    node.expanded = !node.expanded;
    this.visibleData.set(this.flatten(this.root.children ?? []));
  }

  getPadding(level: number): string {
    return `${level * 20}px`;
  }
}
