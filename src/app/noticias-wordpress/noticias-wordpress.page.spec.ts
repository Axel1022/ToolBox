import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasWordpressPage } from './noticias-wordpress.page';

describe('NoticiasWordpressPage', () => {
  let component: NoticiasWordpressPage;
  let fixture: ComponentFixture<NoticiasWordpressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasWordpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
