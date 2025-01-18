import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CchildComponent } from './cchild.component';

describe('CchildComponent', () => {
  let component: CchildComponent;
  let fixture: ComponentFixture<CchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
