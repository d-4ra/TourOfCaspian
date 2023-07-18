import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishSearchComponent } from './dish-search.component';

describe('DishSearchComponent', () => {
  let component: DishSearchComponent;
  let fixture: ComponentFixture<DishSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishSearchComponent]
    });
    fixture = TestBed.createComponent(DishSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
