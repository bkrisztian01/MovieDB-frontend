import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastScrollerComponent } from './cast-scroller.component';

describe('CastScrollerComponent', () => {
  let component: CastScrollerComponent;
  let fixture: ComponentFixture<CastScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
