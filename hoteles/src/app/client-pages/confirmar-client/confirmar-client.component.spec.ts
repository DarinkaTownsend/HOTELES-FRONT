import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarClientComponent } from './confirmar-client.component';

describe('ConfirmarClientComponent', () => {
  let component: ConfirmarClientComponent;
  let fixture: ComponentFixture<ConfirmarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
