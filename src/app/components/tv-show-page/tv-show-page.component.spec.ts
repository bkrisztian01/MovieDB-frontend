import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowPageComponent } from './tv-show-page.component';

describe('TvShowPageComponent', () => {
  let component: TvShowPageComponent;
  let fixture: ComponentFixture<TvShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
