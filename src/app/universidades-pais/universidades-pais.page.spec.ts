import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversidadesPaisPage } from './universidades-pais.page';

describe('UniversidadesPaisPage', () => {
  let component: UniversidadesPaisPage;
  let fixture: ComponentFixture<UniversidadesPaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadesPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
