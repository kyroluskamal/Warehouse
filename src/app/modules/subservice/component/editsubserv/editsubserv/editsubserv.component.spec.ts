import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubservComponent } from './editsubserv.component';

describe('EditsubservComponent', () => {
  let component: EditsubservComponent;
  let fixture: ComponentFixture<EditsubservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
