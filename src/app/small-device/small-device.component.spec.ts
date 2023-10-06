import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDeviceComponent } from './small-device.component';

describe('SmallDeviceComponent', () => {
  let component: SmallDeviceComponent;
  let fixture: ComponentFixture<SmallDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallDeviceComponent]
    });
    fixture = TestBed.createComponent(SmallDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
