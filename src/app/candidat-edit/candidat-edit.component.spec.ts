import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidatEditComponent } from './candidat-edit.component';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'

describe('CandidatEditComponent', () => {
  let component: CandidatEditComponent;
  let fixture: ComponentFixture<CandidatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [{FormsModule, FormBuilder , FormGroup, Validators}],
      declarations: [ CandidatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
