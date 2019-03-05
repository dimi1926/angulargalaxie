import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsQualifiesComponent } from './candidats-qualifies.component';

describe('CandidatsQualifiesComponent', () => {
  let component: CandidatsQualifiesComponent;
  let fixture: ComponentFixture<CandidatsQualifiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatsQualifiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsQualifiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
