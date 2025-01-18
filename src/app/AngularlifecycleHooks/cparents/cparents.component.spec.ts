import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CparentsComponent } from './cparents.component';

describe('CparentsComponent', () => {
  let component: CparentsComponent;
  let fixture: ComponentFixture<CparentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CparentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
