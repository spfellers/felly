import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlRegexTesterComponent } from './url-regex-tester.component';

describe('UrlRegexTesterComponent', () => {
  let component: UrlRegexTesterComponent;
  let fixture: ComponentFixture<UrlRegexTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlRegexTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlRegexTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
