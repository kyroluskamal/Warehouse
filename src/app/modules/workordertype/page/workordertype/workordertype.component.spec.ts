import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkordertypeComponent } from './workordertype.component';

describe('WorkordertypeComponent', () => {
  let component: WorkordertypeComponent;
  let fixture: ComponentFixture<WorkordertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkordertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkordertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
