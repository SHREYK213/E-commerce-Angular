import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchForm: FormGroup;

  
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchInput: ['']
    });
  }
}
