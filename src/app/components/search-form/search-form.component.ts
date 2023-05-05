import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() searchSubmit = new EventEmitter();
  searchForm = this.fb.group({
    query: ['', Validators.required],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  onSubmit() {
    if (this.searchForm.valid) {
      this.router.navigate(['/search'], {
        queryParams: {
          query: this.searchForm.value.query,
        },
      });
      this.searchForm.reset();
      this.searchSubmit.emit();
    }
  }
}
