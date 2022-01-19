import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClientComponent } from './consultar-client.component';

describe('ConsultarClientComponent', () => {
  let component: ConsultarClientComponent;
  let fixture: ComponentFixture<ConsultarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
