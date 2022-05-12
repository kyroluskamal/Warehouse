import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofessionComponent } from './editprofession.component';

describe('EditprofessionComponent', () => {
  let component: EditprofessionComponent;
  let fixture: ComponentFixture<EditprofessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
