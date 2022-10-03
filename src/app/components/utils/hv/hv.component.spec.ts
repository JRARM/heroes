import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvComponent } from './hv.component';

describe('HvComponent', () => {
  let component: HvComponent;
  let fixture: ComponentFixture<HvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
