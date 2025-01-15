import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTextBlockComponent } from './right-text-block.component';

describe('RightTextBlockComponent', () => {
  let component: RightTextBlockComponent;
  let fixture: ComponentFixture<RightTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightTextBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
