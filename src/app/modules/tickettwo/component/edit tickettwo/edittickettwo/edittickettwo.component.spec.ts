import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittickettwoComponent } from './edittickettwo.component';

describe('EdittickettwoComponent', () => {
  let component: EdittickettwoComponent;
  let fixture: ComponentFixture<EdittickettwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittickettwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittickettwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
