import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatebmiComponent } from './calculatebmi.component';

describe('CalculatebmiComponent', () => {
  let component: CalculatebmiComponent;
  let fixture: ComponentFixture<CalculatebmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatebmiComponent]
    });
    fixture = TestBed.createComponent(CalculatebmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
