import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Bookmark } from './bookmark';

@Injectable()
export class BookmarksSyncService {

  constructor() { }
  public static AddBokkmark = new Subject<Bookmark>();
  public static UpdateBookmark = new Subject<Bookmark>();


}
