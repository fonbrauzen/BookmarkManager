import { TestBed, inject } from '@angular/core/testing';

import { BookmarksLocalService } from './bookmarks-local.service';

describe('BookmarksLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarksLocalService]
    });
  });

  it('should be created', inject([BookmarksLocalService], (service: BookmarksLocalService) => {
    expect(service).toBeTruthy();
  }));
});
