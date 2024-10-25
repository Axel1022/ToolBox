import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaPrincipalPage } from './vista-principal.page';

describe('VistaPrincipalPage', () => {
  let component: VistaPrincipalPage;
  let fixture: ComponentFixture<VistaPrincipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
