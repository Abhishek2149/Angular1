import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTextBlockComponent } from './left-text-block.component';

describe('LeftTextBlockComponent', () => {
  let component: LeftTextBlockComponent;
  let fixture: ComponentFixture<LeftTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftTextBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
