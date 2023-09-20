import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditEmpComponent } from './edit-emp.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditEmpComponent', () => {
  let component: EditEmpComponent;
  let fixture: ComponentFixture<EditEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpComponent ],
      imports:[ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
