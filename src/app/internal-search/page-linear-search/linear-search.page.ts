import { Component } from '@angular/core';
import {TitlePageComponent} from '../../utils/title-page/title-page.component';
import {InteractiveLinearSearch} from './interactive-linear-search/interactive-linear-search';
import {CodeComponent} from '../../utils/code-linear/code.component';
import {linear_search_md} from '../../markdown_content/markdown_content';

@Component({
  selector: 'app-page-linear-search',
  imports: [
    TitlePageComponent,
    InteractiveLinearSearch,
    CodeComponent
  ],
  templateUrl: './linear-search.page.html',
  styleUrl: './linear-search.page.scss'
})
export class LinearSearchPage {
  protected readonly linear_search_md = linear_search_md;
}
