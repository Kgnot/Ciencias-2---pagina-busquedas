import { Component } from '@angular/core';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {InteractiveLinearSearch} from './interactive-linear-search/interactive-linear-search';

@Component({
  selector: 'app-page-linear-search',
  imports: [
    TitlePageComponent,
    InteractiveLinearSearch,
  ],
  templateUrl: './linear-search.page.html',
  styleUrl: './linear-search.page.scss'
})
export class LinearSearchPage {
}
