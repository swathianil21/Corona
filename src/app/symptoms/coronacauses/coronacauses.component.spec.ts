import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronacausesComponent } from './coronacauses.component';

describe('CoronacausesComponent', () => {
  let component: CoronacausesComponent;
  let fixture: ComponentFixture<CoronacausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronacausesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronacausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
