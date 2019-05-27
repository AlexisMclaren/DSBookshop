import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookRecordFormComponent } from './create-book-record-form.component';

describe('CreateBookRecordFormComponent', () => {
  let component: CreateBookRecordFormComponent;
  let fixture: ComponentFixture<CreateBookRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
