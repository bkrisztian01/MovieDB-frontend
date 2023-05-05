import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output() searchSubmit = new EventEmitter();
  @Input() clearOnSubmit = false;
  @Input() defaultValue = '';
  searchForm = this.fb.group({
    query: ['', Validators.required],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm.setValue({ query: this.defaultValue });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.router.navigate(['/search'], {
        queryParams: {
          query: this.searchForm.value.query,
        },
      });
      if (this.clearOnSubmit) {
        this.searchForm.reset();
      }
      this.searchSubmit.emit();
    }
  }
}
