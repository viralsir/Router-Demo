import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistherComponent } from './registher.component';

describe('RegistherComponent', () => {
  let component: RegistherComponent;
  let fixture: ComponentFixture<RegistherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
