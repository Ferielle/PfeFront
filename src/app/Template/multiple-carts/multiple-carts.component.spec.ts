import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCartsComponent } from './multiple-carts.component';

describe('MultipleCartsComponent', () => {
  let component: MultipleCartsComponent;
  let fixture: ComponentFixture<MultipleCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
