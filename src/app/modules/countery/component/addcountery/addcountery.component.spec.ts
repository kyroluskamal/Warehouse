import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcounteryComponent } from './addcountery.component';

describe('AddcounteryComponent', () => {
  let component: AddcounteryComponent;
  let fixture: ComponentFixture<AddcounteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcounteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcounteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
