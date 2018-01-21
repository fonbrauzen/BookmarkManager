import { Component, OnInit } from '@angular/core';
import { BookmarkCardComponent } from '..//bookmark-card/bookmark-card.component';
import { Bookmark } from '../bookmark';
import { BookmarksLocalService } from '..//bookmarks-local.service';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrls: ['./bookmarks-container.component.css']
})
export class BookmarksContainerComponent implements OnInit {

  constructor() { }
  bookmarks: Bookmark[];
  ngOnInit() {
    BookmarksLocalService.GetAllBookmarks().subscribe(result =>
      this.bookmarks = result
    );
  }

}
