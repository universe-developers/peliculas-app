import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardKidsComponent } from './billboard-kids.component';

describe('BillboardKidsComponent', () => {
  let component: BillboardKidsComponent;
  let fixture: ComponentFixture<BillboardKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
