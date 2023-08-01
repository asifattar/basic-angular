import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaysDataBaindingComponent } from './two-ways-data-bainding.component';

describe('TwoWaysDataBaindingComponent', () => {
  let component: TwoWaysDataBaindingComponent;
  let fixture: ComponentFixture<TwoWaysDataBaindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaysDataBaindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaysDataBaindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
