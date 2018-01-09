import { TestBed, inject } from '@angular/core/testing';

import { BookmarksSyncService } from './bookmarks-sync.service';

describe('BookmarksSyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarksSyncService]
    });
  });

  it('should be created', inject([BookmarksSyncService], (service: BookmarksSyncService) => {
    expect(service).toBeTruthy();
  }));
});
