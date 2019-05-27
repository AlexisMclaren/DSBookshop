import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBookCategoryComponent } from './chart-book-category.component';

describe('ChartBookCategoryComponent', () => {
  let component: ChartBookCategoryComponent;
  let fixture: ComponentFixture<ChartBookCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBookCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
