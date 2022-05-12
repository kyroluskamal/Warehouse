import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusertypeComponent } from './editusertype.component';

describe('EditusertypeComponent', () => {
  let component: EditusertypeComponent;
  let fixture: ComponentFixture<EditusertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
