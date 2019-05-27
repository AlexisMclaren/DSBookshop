import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookRecordComponent } from './update-book-record.component';

describe('UpdateBookRecordComponent', () => {
  let component: UpdateBookRecordComponent;
  let fixture: ComponentFixture<UpdateBookRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
