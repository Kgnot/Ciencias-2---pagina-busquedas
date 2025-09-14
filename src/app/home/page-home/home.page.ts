import {Component, OnInit} from '@angular/core';
import {SyllabusTableComponent} from '../../utils/syllabus-table/syllabus-table.component';

interface Row {
  id: string;
  label: string;
  level: number;
}

@Component({
  selector: 'app-home',
  imports: [
    SyllabusTableComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
