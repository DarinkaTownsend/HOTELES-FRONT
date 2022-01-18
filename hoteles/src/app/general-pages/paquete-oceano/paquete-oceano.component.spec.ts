import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteOceanoComponent } from './paquete-oceano.component';

describe('PaqueteOceanoComponent', () => {
  let component: PaqueteOceanoComponent;
  let fixture: ComponentFixture<PaqueteOceanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteOceanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteOceanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
