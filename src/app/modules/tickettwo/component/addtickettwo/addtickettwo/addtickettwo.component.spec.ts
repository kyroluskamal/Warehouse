import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtickettwoComponent } from './addtickettwo.component';

describe('AddtickettwoComponent', () => {
  let component: AddtickettwoComponent;
  let fixture: ComponentFixture<AddtickettwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtickettwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtickettwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
