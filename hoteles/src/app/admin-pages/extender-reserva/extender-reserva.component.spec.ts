import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenderReservaComponent } from './extender-reserva.component';

describe('ExtenderReservaComponent', () => {
  let component: ExtenderReservaComponent;
  let fixture: ComponentFixture<ExtenderReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtenderReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenderReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
