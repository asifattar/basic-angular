import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDataBaindingComponent } from './event-data-bainding.component';

describe('EventDataBaindingComponent', () => {
  let component: EventDataBaindingComponent;
  let fixture: ComponentFixture<EventDataBaindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDataBaindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDataBaindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
