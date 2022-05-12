import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcounteryComponent } from './editcountery.component';

describe('EditcounteryComponent', () => {
  let component: EditcounteryComponent;
  let fixture: ComponentFixture<EditcounteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcounteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcounteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
