import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtservicetypeComponent } from './edtservicetype.component';

describe('EdtservicetypeComponent', () => {
  let component: EdtservicetypeComponent;
  let fixture: ComponentFixture<EdtservicetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtservicetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtservicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
