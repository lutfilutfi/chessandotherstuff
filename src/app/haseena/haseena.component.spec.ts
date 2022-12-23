import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaseenaComponent } from './haseena.component';

describe('HaseenaComponent', () => {
  let component: HaseenaComponent;
  let fixture: ComponentFixture<HaseenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaseenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaseenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
