import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepriceComponent } from './serviceprice.component';

describe('ServicepriceComponent', () => {
  let component: ServicepriceComponent;
  let fixture: ComponentFixture<ServicepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicepriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
