import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOperations } from './pipes-operations';

describe('PipesOperations', () => {
  let component: PipesOperations;
  let fixture: ComponentFixture<PipesOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesOperations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
