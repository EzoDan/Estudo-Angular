import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { TwoWayBinding } from './two-way-binding';

describe('TwoWayBinding', () => {
  let component: TwoWayBinding;
  let fixture: ComponentFixture<TwoWayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBinding, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
