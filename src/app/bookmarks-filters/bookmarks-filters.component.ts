import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BookmarkFormComponent } from '..//bookmark-form/bookmark-form.component';
import { Bookmark } from '..//bookmark';
import { BookmarksLocalService } from '../bookmarks-local.service';


@Component({
  selector: 'app-bookmarks-filters',
  templateUrl: './bookmarks-filters.component.html',
  styleUrls: ['./bookmarks-filters.component.css']
})
export class BookmarksFiltersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addBookmark(): void {
    this.openDialog(new Bookmark());
  }

  openDialog(bookmark: Bookmark): void {
    const dialogRef = this.dialog.open(BookmarkFormComponent, {
      width: '300px',
      data: bookmark
    });
    console.log(dialogRef);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      BookmarksLocalService.AddBookmark(result);
    });
  }

}
