import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondRend } from './cond-rend';

describe('CondRend', () => {
  let component: CondRend;
  let fixture: ComponentFixture<CondRend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondRend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondRend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
