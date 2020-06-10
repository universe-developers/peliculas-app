import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBillboardComponent } from './movie-billboard.component';

describe('MovieBillboardComponent', () => {
  let component: MovieBillboardComponent;
  let fixture: ComponentFixture<MovieBillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBillboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
