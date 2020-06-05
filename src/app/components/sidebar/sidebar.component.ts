import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  searchString: string;
  constructor() {
  }

  updateValue(value: string) {
    this.searchString = value;
  }
}
