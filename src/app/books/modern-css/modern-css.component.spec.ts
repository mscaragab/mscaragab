import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernCssComponent } from './modern-css.component';

describe('ModernCssComponent', () => {
  let component: ModernCssComponent;
  let fixture: ComponentFixture<ModernCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
