import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScrollItemComponent } from './movie-scroll-item.component';

describe('MovieScrollItemComponent', () => {
  let component: MovieScrollItemComponent;
  let fixture: ComponentFixture<MovieScrollItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieScrollItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
