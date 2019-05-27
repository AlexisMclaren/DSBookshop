import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookRecordComponent } from './delete-book-record.component';

describe('DeleteBookRecordComponent', () => {
  let component: DeleteBookRecordComponent;
  let fixture: ComponentFixture<DeleteBookRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBookRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
