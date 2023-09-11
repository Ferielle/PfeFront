import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitformComponent } from './produitform.component';

describe('ProduitformComponent', () => {
  let component: ProduitformComponent;
  let fixture: ComponentFixture<ProduitformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
