import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackWebsiteComponent } from './callback-website.component';

describe('CallbackWebsiteComponent', () => {
  let component: CallbackWebsiteComponent;
  let fixture: ComponentFixture<CallbackWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallbackWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
