import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpriorityComponent } from './addpriority.component';

describe('AddpriorityComponent', () => {
  let component: AddpriorityComponent;
  let fixture: ComponentFixture<AddpriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
