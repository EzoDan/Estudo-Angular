import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerListas } from './ler-listas';

describe('LerListas', () => {
  let component: LerListas;
  let fixture: ComponentFixture<LerListas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LerListas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerListas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
