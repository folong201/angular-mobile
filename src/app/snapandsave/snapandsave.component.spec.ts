import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapandsaveComponent } from './snapandsave.component';

describe('SnapandsaveComponent', () => {
  let component: SnapandsaveComponent;
  let fixture: ComponentFixture<SnapandsaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapandsaveComponent]
    });
    fixture = TestBed.createComponent(SnapandsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
