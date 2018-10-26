import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometongbuComponent } from './hometongbu.component';

describe('HometongbuComponent', () => {
  let component: HometongbuComponent;
  let fixture: ComponentFixture<HometongbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometongbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometongbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
