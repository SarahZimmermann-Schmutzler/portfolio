import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartscreenMobileComponent } from './startscreen-mobile.component';

describe('StartscreenMobileComponent', () => {
  let component: StartscreenMobileComponent;
  let fixture: ComponentFixture<StartscreenMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartscreenMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartscreenMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
