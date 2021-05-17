import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingStoreComponent } from './shopping-store.component';

describe('ShoppingStoreComponent', () => {
  let component: ShoppingStoreComponent;
  let fixture: ComponentFixture<ShoppingStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
