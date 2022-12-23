import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukmanComponent } from './dukman.component';

describe('DukmanComponent', () => {
  let component: DukmanComponent;
  let fixture: ComponentFixture<DukmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
