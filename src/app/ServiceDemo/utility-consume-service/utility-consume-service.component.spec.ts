import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityConsumeServiceComponent } from './utility-consume-service.component';

describe('UtilityConsumeServiceComponent', () => {
  let component: UtilityConsumeServiceComponent;
  let fixture: ComponentFixture<UtilityConsumeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityConsumeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityConsumeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
