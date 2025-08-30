import {Routes} from '@angular/router';
import {HomePage} from './home/page-home/home.page';
import {ExternalSearchPage} from './external-search/external-search/external-search.page';
import {
  BinarySearchPage,
  ClassTransformationSearchPage,
  InternalSearchPage,
  LinearSearchPage, RangeSearchPage,
  ResidualSearchPage
} from './internal-search';


export const routes: Routes = [

  {
    path: '',
    component: HomePage,
    title: 'HomePage'
  },
  {
    path: 'external-search',
    component: ExternalSearchPage,
    title: 'ExternalSearchPage'
  },
  {
    path: 'internal-search',
    component: InternalSearchPage,
    title: 'InternalSearchPage'
  }
  ,
  // rutas internas específicas
  {
    path: 'linear-search',
    component: LinearSearchPage,
    title: 'LinearSearchPage'
  },
  {
    path: 'binary-search',
    component: BinarySearchPage,
    title: 'BinarySearchPage'
  },
  {
    path: 'class-transformation-search',
    component: ClassTransformationSearchPage,
    title: 'ClassTransformationSearchPage'
  },
  {
    path: 'residual-search',
    component: ResidualSearchPage,
    title: 'ResidualSearchPage'
  },
  {
    path: 'range-search',
    component: RangeSearchPage,
    title: 'RangeSearchPage'
  }
];
