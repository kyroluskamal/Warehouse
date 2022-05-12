import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworktypeComponent } from './addworktype.component';

describe('AddworktypeComponent', () => {
  let component: AddworktypeComponent;
  let fixture: ComponentFixture<AddworktypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddworktypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
