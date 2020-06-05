import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchStringChange: EventEmitter<string> = new EventEmitter<string>();
  searchString: '';
  constructor() { }

  update(value: string) {
    this.searchStringChange.emit(value);
  }

  ngOnInit(): void {
  }
}
