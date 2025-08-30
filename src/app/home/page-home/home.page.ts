import { Component } from '@angular/core';
import {ListPrincipalCardsComponent} from '../../utils/list-principal-cards/list-principal-cards.component';
import {PrincipalCardsComponent} from '../../utils/principal-cards/principal-cards.component';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {InputSearchComponent} from '../input-search/input-search.component';

@Component({
  selector: 'app-home',
  imports: [
    ListPrincipalCardsComponent,
    PrincipalCardsComponent,
    TitlePageComponent,
    InputSearchComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
