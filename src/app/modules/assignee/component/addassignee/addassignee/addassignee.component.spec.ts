import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassigneeComponent } from './addassignee.component';

describe('AddassigneeComponent', () => {
  let component: AddassigneeComponent;
  let fixture: ComponentFixture<AddassigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddassigneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
