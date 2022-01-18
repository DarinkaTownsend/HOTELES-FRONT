import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteFamiliarComponent } from './paquete-familiar.component';

describe('PaqueteFamiliarComponent', () => {
  let component: PaqueteFamiliarComponent;
  let fixture: ComponentFixture<PaqueteFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
