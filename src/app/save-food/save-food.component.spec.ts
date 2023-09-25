import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFoodComponent } from './save-food.component';

describe('SaveFoodComponent', () => {
  let component: SaveFoodComponent;
  let fixture: ComponentFixture<SaveFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveFoodComponent]
    });
    fixture = TestBed.createComponent(SaveFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
