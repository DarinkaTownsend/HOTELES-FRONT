import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteParejaComponent } from './paquete-pareja.component';

describe('PaqueteParejaComponent', () => {
  let component: PaqueteParejaComponent;
  let fixture: ComponentFixture<PaqueteParejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteParejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteParejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
