import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionOfFormsComponent } from './revision-of-forms.component';

describe('RevisionOfFormsComponent', () => {
  let component: RevisionOfFormsComponent;
  let fixture: ComponentFixture<RevisionOfFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisionOfFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionOfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
