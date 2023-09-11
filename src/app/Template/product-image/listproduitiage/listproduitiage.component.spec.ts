import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitiageComponent } from './listproduitiage.component';

describe('ListproduitiageComponent', () => {
  let component: ListproduitiageComponent;
  let fixture: ComponentFixture<ListproduitiageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproduitiageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproduitiageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
