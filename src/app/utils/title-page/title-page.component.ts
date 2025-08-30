import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-page',
  imports: [],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {

  @Input() title: string;
  @Input() description: string;


  constructor() {
    this.title = '';
    this.description = '';
  }


}
