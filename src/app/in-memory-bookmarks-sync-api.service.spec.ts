import { TestBed, inject } from '@angular/core/testing';

import { InMemoryBookmarksSyncApiService } from './in-memory-bookmarks-sync-api.service';

describe('InMemoryBookmarksSyncApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryBookmarksSyncApiService]
    });
  });

  it('should be created', inject([InMemoryBookmarksSyncApiService], (service: InMemoryBookmarksSyncApiService) => {
    expect(service).toBeTruthy();
  }));
});
