import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarClientComponent } from './reservar-client.component';

describe('ReservarClientComponent', () => {
  let component: ReservarClientComponent;
  let fixture: ComponentFixture<ReservarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
