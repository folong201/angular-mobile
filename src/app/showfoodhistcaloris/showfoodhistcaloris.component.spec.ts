import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfoodhistcalorisComponent } from './showfoodhistcaloris.component';

describe('ShowfoodhistcalorisComponent', () => {
  let component: ShowfoodhistcalorisComponent;
  let fixture: ComponentFixture<ShowfoodhistcalorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowfoodhistcalorisComponent]
    });
    fixture = TestBed.createComponent(ShowfoodhistcalorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
