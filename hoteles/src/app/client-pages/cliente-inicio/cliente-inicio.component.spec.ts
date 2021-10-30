import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInicioComponent } from './cliente-inicio.component';

describe('ClienteInicioComponent', () => {
  let component: ClienteInicioComponent;
  let fixture: ComponentFixture<ClienteInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
