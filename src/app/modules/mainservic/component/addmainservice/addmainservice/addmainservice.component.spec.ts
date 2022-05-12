import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmainserviceComponent } from './addmainservice.component';

describe('AddmainserviceComponent', () => {
  let component: AddmainserviceComponent;
  let fixture: ComponentFixture<AddmainserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmainserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmainserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
