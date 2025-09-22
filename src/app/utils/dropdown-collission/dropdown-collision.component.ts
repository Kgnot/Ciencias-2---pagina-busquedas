import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-dropdown-collission',
    imports: [
        MatIcon
    ],
  templateUrl: './dropdown-collision.component.html',
  styleUrl: './dropdown-collision.component.scss'
})
export class DropdownCollision {

  protected activeDropdown: string | null = ''


  toggleDropdown(choose: string) {
    if (this.activeDropdown === choose) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = choose;
    }
  }
}
