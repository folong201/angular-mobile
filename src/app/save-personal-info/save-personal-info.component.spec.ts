import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePersonalInfoComponent } from './save-personal-info.component';

describe('SavePersonalInfoComponent', () => {
  let component: SavePersonalInfoComponent;
  let fixture: ComponentFixture<SavePersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavePersonalInfoComponent]
    });
    fixture = TestBed.createComponent(SavePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
