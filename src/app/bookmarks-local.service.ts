import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/max';

import { LocalHelper } from './local-helper';
import { BookmarkTag } from './bookmark-tag';
import { Constants } from './constants';
import { Bookmark } from './bookmark';
import { BookmarksSyncService } from './bookmarks-sync.service';

@Injectable()
export class BookmarksLocalService {

  constructor() { }

  // GetAllTags = (): Observable<BookmarkTag[]> => {
  //   const tags = LocalHelper.GetLocalObjectByKey(Constants.tagsKey);
  //   return Observable.create(tags as BookmarkTag[]);
  // }
  // TagsUpdate = (tags: BookmarkTag[]): Observable<BookmarkTag[]> => {
  //   LocalHelper.SetLocalObjectByKey(Constants.tagsKey, tags);
  //   return Observable.create(tags);
  // }

  // AddTag = (tag: string): Observable<number> => {
  //   let latestTags: BookmarkTag[];
  //   let tagId: number;
  //   let newTag: BookmarkTag;
  //   this.GetAllTags().subscribe(tags => {
  //     latestTags = tags;
  //     Observable.of<BookmarkTag>(...tags).max<BookmarkTag>((a: BookmarkTag, b: BookmarkTag) => a.id < b.id ? -1 : 1).subscribe(
  //       x => { tagId = x.id + 1; });
  //       newTag = new BookmarkTag(tagId, tag);
  //     latestTags.push(newTag);
  //   });
  //   this.TagsUpdate(latestTags);
  //   return Observable.create(newTag);
  // }

 public static GetAllBookmarks = (): Observable<Bookmark[]> => {
    let bookmarks = LocalHelper.GetLocalObjectByKey(Constants.bookmarksKey);
    if (bookmarks === null) {
      BookmarksLocalService.CreateBookmarksKey();
      bookmarks = [];
    }
    console.log(bookmarks);
    return Observable.of(bookmarks as Bookmark[]);
  }
  public static CreateBookmarksKey = (): void => {
    const newBookmarksArray: Bookmark[] = [];
    LocalHelper.SetLocalObjectByKey(Constants.bookmarksKey, newBookmarksArray);
  }
  public static BookmarksUpdate = (bookmarks: Bookmark[]): Observable<Bookmark[]> => {
    LocalHelper.SetLocalObjectByKey(Constants.bookmarksKey, bookmarks);
    return Observable.of(bookmarks);
  }

  public static AddBookmark = (bookmark: Bookmark): void => {
    let latestBookmarks: Bookmark[];
    let bookmarkId: number;
    let newBookmark: Bookmark;
    BookmarksLocalService.GetAllBookmarks().subscribe(bookmarks => {
      latestBookmarks = bookmarks;
      Observable.of<Bookmark>(...bookmarks).max<Bookmark>((a: Bookmark, b: Bookmark) => a.id < b.id ? -1 : 1).subscribe(
        x => { bookmarkId = x.id + 1; });
        newBookmark = bookmark;
        newBookmark.id = bookmarkId;
      latestBookmarks.push(newBookmark);
    });
    BookmarksLocalService.BookmarksUpdate(latestBookmarks);
    BookmarksSyncService.AddBokkmark.next(newBookmark);
  }

}
