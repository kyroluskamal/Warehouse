import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofessionComponent } from './addprofession.component';

describe('AddprofessionComponent', () => {
  let component: AddprofessionComponent;
  let fixture: ComponentFixture<AddprofessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
