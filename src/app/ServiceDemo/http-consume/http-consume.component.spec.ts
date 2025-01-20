import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpConsumeComponent } from './http-consume.component';

describe('HttpConsumeComponent', () => {
  let component: HttpConsumeComponent;
  let fixture: ComponentFixture<HttpConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpConsumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
