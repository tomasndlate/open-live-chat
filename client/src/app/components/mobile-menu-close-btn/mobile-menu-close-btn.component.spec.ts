import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuCloseBtnComponent } from './mobile-menu-close-btn.component';

describe('MobileMenuCloseBtnComponent', () => {
  let component: MobileMenuCloseBtnComponent;
  let fixture: ComponentFixture<MobileMenuCloseBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuCloseBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenuCloseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
