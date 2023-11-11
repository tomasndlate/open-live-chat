import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWarningLinkComponent } from './top-warning-link.component';

describe('TopWarningLinkComponent', () => {
  let component: TopWarningLinkComponent;
  let fixture: ComponentFixture<TopWarningLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopWarningLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopWarningLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
