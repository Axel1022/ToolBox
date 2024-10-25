import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrediccionEdadPage } from './prediccion-edad.page';

describe('PrediccionEdadPage', () => {
  let component: PrediccionEdadPage;
  let fixture: ComponentFixture<PrediccionEdadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediccionEdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
