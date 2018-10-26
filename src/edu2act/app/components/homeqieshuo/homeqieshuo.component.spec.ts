import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeqieshuoComponent } from './homeqieshuo.component';

describe('HomeqieshuoComponent', () => {
  let component: HomeqieshuoComponent;
  let fixture: ComponentFixture<HomeqieshuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeqieshuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeqieshuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
