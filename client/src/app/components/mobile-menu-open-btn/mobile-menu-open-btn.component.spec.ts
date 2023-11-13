import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuOpenBtnComponent } from './mobile-menu-open-btn.component';

describe('MobileMenuOpenBtnComponent', () => {
  let component: MobileMenuOpenBtnComponent;
  let fixture: ComponentFixture<MobileMenuOpenBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuOpenBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenuOpenBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
