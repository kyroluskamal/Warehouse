import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmapComponent } from './addmap.component';

describe('AddmapComponent', () => {
  let component: AddmapComponent;
  let fixture: ComponentFixture<AddmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
