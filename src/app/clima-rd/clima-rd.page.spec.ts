import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimaRdPage } from './clima-rd.page';

describe('ClimaRdPage', () => {
  let component: ClimaRdPage;
  let fixture: ComponentFixture<ClimaRdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaRdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
