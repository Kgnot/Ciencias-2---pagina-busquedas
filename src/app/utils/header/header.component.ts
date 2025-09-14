import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatIcon
  ]
})
export class HeaderComponent {
  activeDropdown: string | null = null;
  activeSubDropdown: string | null = null;
  activeSubSubDropdown: string | null = null;

  toggleDropdown(dropdown: string): void {
    if (this.activeDropdown === dropdown) {
      this.closeAllDropdowns();
    } else {
      this.activeDropdown = dropdown;
      this.activeSubDropdown = null;
      this.activeSubSubDropdown = null;
    }
  }

  toggleSubDropdown(subDropdown: string): void {
    if (this.activeSubDropdown === subDropdown) {
      this.activeSubDropdown = null;
      this.activeSubSubDropdown = null;
    } else {
      this.activeSubDropdown = subDropdown;
      this.activeSubSubDropdown = null;
    }
  }

  toggleSubSubDropdown(subSubDropdown: string): void {
    if (this.activeSubSubDropdown === subSubDropdown) {
      this.activeSubSubDropdown = null;
    } else {
      this.activeSubSubDropdown = subSubDropdown;
    }
  }

  closeAllDropdowns(): void {
    this.activeDropdown = null;
    this.activeSubDropdown = null;
    this.activeSubSubDropdown = null;
  }
}
