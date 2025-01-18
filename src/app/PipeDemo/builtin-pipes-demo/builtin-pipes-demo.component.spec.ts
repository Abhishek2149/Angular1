import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinPipesDemoComponent } from './builtin-pipes-demo.component';

describe('BuiltinPipesDemoComponent', () => {
  let component: BuiltinPipesDemoComponent;
  let fixture: ComponentFixture<BuiltinPipesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltinPipesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltinPipesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
