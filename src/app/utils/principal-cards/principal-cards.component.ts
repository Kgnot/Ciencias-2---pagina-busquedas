import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon'

@Component({
  selector: 'app-principal-cards',
  imports: [
    MatIcon
  ],
  templateUrl: './principal-cards.component.html',
  styleUrl: './principal-cards.component.scss'
})
export class PrincipalCardsComponent {

  @Input({required: true}) title: string;
  @Input({required: true}) description: string;
  @Input({required: true}) link_page_to: string;
  @Input() icon?: string;

  constructor() {
    this.title = ''
    this.description = ''
    this.link_page_to = ''
  }

}
