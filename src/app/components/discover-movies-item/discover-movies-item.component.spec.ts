import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMoviesItemComponent } from './discover-movies-item.component';

describe('DiscoverMoviesItemComponent', () => {
  let component: DiscoverMoviesItemComponent;
  let fixture: ComponentFixture<DiscoverMoviesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverMoviesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMoviesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
