import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCargosComponent } from './agregar-cargos.component';

describe('AgregarCargosComponent', () => {
  let component: AgregarCargosComponent;
  let fixture: ComponentFixture<AgregarCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCargosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
