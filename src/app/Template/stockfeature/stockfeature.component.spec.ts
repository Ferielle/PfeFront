import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockfeatureComponent } from './stockfeature.component';

describe('StockfeatureComponent', () => {
  let component: StockfeatureComponent;
  let fixture: ComponentFixture<StockfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
