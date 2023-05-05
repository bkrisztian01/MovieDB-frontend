import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScrollerComponent } from './movie-scroller.component';

describe('MovieScrollerComponent', () => {
  let component: MovieScrollerComponent;
  let fixture: ComponentFixture<MovieScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
