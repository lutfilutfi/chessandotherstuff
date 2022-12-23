import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliphComponent } from './caliph.component';

describe('CaliphComponent', () => {
  let component: CaliphComponent;
  let fixture: ComponentFixture<CaliphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
