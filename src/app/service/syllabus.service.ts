import {Injectable} from '@angular/core';
import temario from '../../../public/assets/json/temario.json'

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  getSyllabus(): SyllabusNode {
    return temario as SyllabusNode;
  }
}
