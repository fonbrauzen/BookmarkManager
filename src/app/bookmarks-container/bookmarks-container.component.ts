import { Component, OnInit } from '@angular/core';
import { BookmarkCardComponent } from '..//bookmark-card/bookmark-card.component';
import { Bookmark } from '../bookmark';
import { BookmarksLocalService } from '..//bookmarks-local.service';
import { BookmarkStore } from '../bookmark-store';
import { BookmarksSyncService } from '../bookmarks-sync.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinct';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrls: ['./bookmarks-container.component.css']
})
export class BookmarksContainerComponent implements OnInit {
  constructor() { }
  bookmarks: Bookmark[];
  bookmarksStore: BookmarkStore;
  ngOnInit() {
    BookmarksLocalService.GetAllBookmarks().subscribe(result =>
      this.bookmarks = result
    );
    BookmarksSyncService.AddBokkmark.subscribe(bookmark => {
      const bookmarks = this.bookmarks.slice();
      const newBookmarks: Bookmark[] = [];
      bookmarks.push(bookmark);
      Observable.of<Bookmark>(...bookmarks).distinct((m: Bookmark) => m.id).subscribe(r => {
        newBookmarks.push(r);
      }, e => console.error(e), () => {
        this.bookmarks = newBookmarks;
      });
    });
  }

}
