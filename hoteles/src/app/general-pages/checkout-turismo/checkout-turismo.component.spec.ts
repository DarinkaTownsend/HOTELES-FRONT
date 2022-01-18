import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutTurismoComponent } from './checkout-turismo.component';

describe('CheckoutTurismoComponent', () => {
  let component: CheckoutTurismoComponent;
  let fixture: ComponentFixture<CheckoutTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
