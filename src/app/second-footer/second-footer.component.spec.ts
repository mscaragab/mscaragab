import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFooterComponent } from './second-footer.component';

describe('SecondFooterComponent', () => {
  let component: SecondFooterComponent;
  let fixture: ComponentFixture<SecondFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
