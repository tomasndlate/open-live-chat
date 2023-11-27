import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendersPositionElementComponent } from './senders-position-element.component';

describe('SendersPositionElementComponent', () => {
  let component: SendersPositionElementComponent;
  let fixture: ComponentFixture<SendersPositionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendersPositionElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendersPositionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
