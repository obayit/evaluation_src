import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEmpComponent } from './dialog-add-emp.component';

describe('DialogAddEmpComponent', () => {
  let component: DialogAddEmpComponent;
  let fixture: ComponentFixture<DialogAddEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
