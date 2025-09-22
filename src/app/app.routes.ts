import {Routes} from '@angular/router';
import {HomePage} from './home/page-home/home.page';
import {ExternalSearchPage} from './external-search/external-search/external-search.page';
import {
  BinarySearchPage,
  InternalSearchPage,
  LinearSearchPage, RangeSearchPage,
  ResidualSearchPage
} from './internal-search';
import {FunctionHashModuleComponent} from './internal-search/function-module-hash/function-hash-module.component';
import {FunctionCuadradoHash} from './internal-search/function-cuadrado-hash/function-cuadrado-hash';
import {FunctionTruncHash} from './internal-search/function-trunc-hash/function-trunc-hash';
import {FunctionPlegamientoHash} from './internal-search/function-plegamiento-hash/function-plegamiento-hash';


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
  },
  // {
  //   path: 'graph',
  //   title: 'Graphs'
  // }

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
    path: 'hash-function',
    component: FunctionHashModuleComponent,
    title: 'FunctionHashComponent'
  },
  {
    path: 'cuadrado-function',
    component: FunctionCuadradoHash,
    title: 'Funcion cuadrado'
  },
  {
    path: 'trunc-function',
    component: FunctionTruncHash,
    title: 'Function Truncamiento'
  },
  {
    path: 'plegamiento-function',
    component: FunctionPlegamientoHash,
    title: 'FunctionPlegamientoHash'
  }
];
