import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicetypeComponent } from './addservicetype.component';

describe('AddservicetypeComponent', () => {
  let component: AddservicetypeComponent;
  let fixture: ComponentFixture<AddservicetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddservicetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
