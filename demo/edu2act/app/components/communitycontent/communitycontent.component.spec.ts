import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitycontentComponent } from './communitycontent.component';

describe('CommunitycontentComponent', () => {
  let component: CommunitycontentComponent;
  let fixture: ComponentFixture<CommunitycontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitycontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
