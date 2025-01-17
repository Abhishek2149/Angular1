import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDemoComponent } from './ng-switch-demo.component';

describe('NgSwitchDemoComponent', () => {
  let component: NgSwitchDemoComponent;
  let fixture: ComponentFixture<NgSwitchDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
