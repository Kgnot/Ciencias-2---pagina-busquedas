import {Component, inject} from '@angular/core';
import {InteractiveSearch} from "../page-linear-search/interactive-linear-search/interactive-search.component";
import {TitlePageComponent} from "../../utils/title-page/title-page.component";
import {BinarySearchService} from '../../service/binary-search.service';

@Component({
  selector: 'app-page-binary-search',
  imports: [
    InteractiveSearch,
    TitlePageComponent
  ],
  templateUrl: './binary-search.page.html',
  styleUrl: './binary-search.page.scss'
})
export class BinarySearchPage {
  protected binary: BinarySearchService = inject(BinarySearchService)
}
