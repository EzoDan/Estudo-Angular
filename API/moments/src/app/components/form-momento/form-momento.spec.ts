import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMomento } from './form-momento';

describe('FormMomento', () => {
  let component: FormMomento;
  let fixture: ComponentFixture<FormMomento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMomento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMomento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
