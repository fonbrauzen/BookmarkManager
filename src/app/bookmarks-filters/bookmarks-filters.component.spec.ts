import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksFiltersComponent } from './bookmarks-filters.component';

describe('BookmarksFiltersComponent', () => {
  let component: BookmarksFiltersComponent;
  let fixture: ComponentFixture<BookmarksFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
