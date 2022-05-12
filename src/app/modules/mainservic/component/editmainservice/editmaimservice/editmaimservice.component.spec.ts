import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaimserviceComponent } from './editmaimservice.component';

describe('EditmaimserviceComponent', () => {
  let component: EditmaimserviceComponent;
  let fixture: ComponentFixture<EditmaimserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmaimserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaimserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
