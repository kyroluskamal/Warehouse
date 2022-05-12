import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadprojectsComponent } from './aadprojects.component';

describe('AadprojectsComponent', () => {
  let component: AadprojectsComponent;
  let fixture: ComponentFixture<AadprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
