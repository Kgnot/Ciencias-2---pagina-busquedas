import {Component, inject} from '@angular/core';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {InteractiveSearch} from './interactive-linear-search/interactive-search.component';
import {LinearSearchService} from '../../service/linear-search.service';

@Component({
  selector: 'app-page-linear-search',
  imports: [
    TitlePageComponent,
    InteractiveSearch,
  ],
  templateUrl: './linear-search.page.html',
  styleUrl: './linear-search.page.scss'
})
export class LinearSearchPage {
  protected linear: LinearSearchService = inject(LinearSearchService);
}
