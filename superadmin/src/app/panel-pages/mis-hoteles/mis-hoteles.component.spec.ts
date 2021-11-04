import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHotelesComponent } from './mis-hoteles.component';

describe('MisHotelesComponent', () => {
  let component: MisHotelesComponent;
  let fixture: ComponentFixture<MisHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisHotelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
