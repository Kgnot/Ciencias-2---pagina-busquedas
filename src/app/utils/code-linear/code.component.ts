import {Component, Input} from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'app-code',
  imports: [MarkdownModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {

  @Input({required: true}) markdownContent!: string;

}
