import { Component } from '@angular/core';
import {InteractiveLinearSearch} from "../page-linear-search/interactive-linear-search/interactive-linear-search";
import {TitlePageComponent} from "../../utils/title-page/title-page.component";

@Component({
  selector: 'app-page-binary-search',
    imports: [
        InteractiveLinearSearch,
        TitlePageComponent
    ],
  templateUrl: './binary-search.page.html',
  styleUrl: './binary-search.page.scss'
})
export class BinarySearchPage {

}
