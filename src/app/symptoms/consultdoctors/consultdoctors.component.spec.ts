import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultdoctorsComponent } from './consultdoctors.component';

describe('ConsultdoctorsComponent', () => {
  let component: ConsultdoctorsComponent;
  let fixture: ComponentFixture<ConsultdoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultdoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultdoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
