import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutfiComponent } from './lutfi.component';

describe('LutfiComponent', () => {
  let component: LutfiComponent;
  let fixture: ComponentFixture<LutfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LutfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LutfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
