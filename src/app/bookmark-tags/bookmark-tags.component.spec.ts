import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTagsComponent } from './bookmark-tags.component';

describe('BookmarkTagsComponent', () => {
  let component: BookmarkTagsComponent;
  let fixture: ComponentFixture<BookmarkTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
