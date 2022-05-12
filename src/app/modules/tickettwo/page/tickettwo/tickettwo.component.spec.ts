import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettwoComponent } from './tickettwo.component';

describe('TickettwoComponent', () => {
  let component: TickettwoComponent;
  let fixture: ComponentFixture<TickettwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickettwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickettwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
