import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesSectionComponent } from './rates-section.component';

describe('RatesSectionComponent', () => {
  let component: RatesSectionComponent;
  let fixture: ComponentFixture<RatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
