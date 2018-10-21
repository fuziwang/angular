import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamcontentComponent } from './teamcontent.component';

describe('TeamcontentComponent', () => {
  let component: TeamcontentComponent;
  let fixture: ComponentFixture<TeamcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
