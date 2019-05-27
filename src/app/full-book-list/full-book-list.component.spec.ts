import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBookListComponent } from './full-book-list.component';

describe('FullBookListComponent', () => {
  let component: FullBookListComponent;
  let fixture: ComponentFixture<FullBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
