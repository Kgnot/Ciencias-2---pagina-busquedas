import { Component } from '@angular/core';
import {InputSearchComponent} from "../../home/input-search/input-search.component";
import {ListPrincipalCardsComponent} from "../../utils/list-principal-cards/list-principal-cards.component";
import {PrincipalCardsComponent} from "../../utils/principal-cards/principal-cards.component";
import {TitlePageComponent} from "../../utils/title-page/title-page.component";

@Component({
  selector: 'app-_principal-page-internal-search',
    imports: [
        InputSearchComponent,
        ListPrincipalCardsComponent,
        PrincipalCardsComponent,
        TitlePageComponent
    ],
  templateUrl: './internal-search.page.html',
  styleUrl: './internal-search.page.scss'
})
export class InternalSearchPage {

}
