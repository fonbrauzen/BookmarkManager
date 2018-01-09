import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkEditComponent } from './bookmark-edit/bookmark-edit.component';
import { BookmarksFiltersComponent } from './bookmarks-filters/bookmarks-filters.component';
import { BookmarksContainerComponent } from './bookmarks-container/bookmarks-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    BookmarkEditComponent,
    BookmarksFiltersComponent,
    BookmarksContainerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
