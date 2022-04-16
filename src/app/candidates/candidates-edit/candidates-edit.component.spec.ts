import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesEditComponent } from './candidates-edit.component';

describe('CandidatesEditComponent', () => {
  let component: CandidatesEditComponent;
  let fixture: ComponentFixture<CandidatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
