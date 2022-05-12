import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteryComponent } from './countery.component';

describe('CounteryComponent', () => {
  let component: CounteryComponent;
  let fixture: ComponentFixture<CounteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
