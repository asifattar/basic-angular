import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInputeValueComponent } from './set-inpute-value.component';

describe('SetInputeValueComponent', () => {
  let component: SetInputeValueComponent;
  let fixture: ComponentFixture<SetInputeValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetInputeValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetInputeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
