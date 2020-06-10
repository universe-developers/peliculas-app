import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieKidsComponent } from './movie-kids.component';

describe('MovieKidsComponent', () => {
  let component: MovieKidsComponent;
  let fixture: ComponentFixture<MovieKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
