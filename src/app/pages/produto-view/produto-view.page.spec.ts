import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoViewPage } from './produto-view.page';

describe('ProdutoViewPage', () => {
  let component: ProdutoViewPage;
  let fixture: ComponentFixture<ProdutoViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
