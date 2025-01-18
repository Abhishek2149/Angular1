import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatomPipeDemoComponent } from './cuatom-pipe-demo.component';

describe('CuatomPipeDemoComponent', () => {
  let component: CuatomPipeDemoComponent;
  let fixture: ComponentFixture<CuatomPipeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuatomPipeDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuatomPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
