import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersElementComponent } from './members-element.component';

describe('MembersElementComponent', () => {
  let component: MembersElementComponent;
  let fixture: ComponentFixture<MembersElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
