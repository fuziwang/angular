import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecourseComponent } from './homecourse.component';

describe('HomecourseComponent', () => {
  let component: HomecourseComponent;
  let fixture: ComponentFixture<HomecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
