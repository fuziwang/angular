import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometongzhiComponent } from './hometongzhi.component';

describe('HometongzhiComponent', () => {
  let component: HometongzhiComponent;
  let fixture: ComponentFixture<HometongzhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometongzhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometongzhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
