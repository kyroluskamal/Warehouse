import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTwoDetailsComponent } from './ticket-two-details.component';

describe('TicketTwoDetailsComponent', () => {
  let component: TicketTwoDetailsComponent;
  let fixture: ComponentFixture<TicketTwoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTwoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTwoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
