import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassigneeComponent } from './editassignee.component';

describe('EditassigneeComponent', () => {
  let component: EditassigneeComponent;
  let fixture: ComponentFixture<EditassigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditassigneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditassigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
