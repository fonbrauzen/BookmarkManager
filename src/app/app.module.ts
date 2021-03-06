import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule, MatSliderModule, MatToolbarModule,
  MatCardModule, MatChipsModule, MatSidenavModule,
  MatProgressSpinnerModule, MatIconModule, MatListModule,
  MatDialogModule, MatSlideToggleModule, MatSelectModule, MatInputModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BookmarkEditComponent } from './bookmark-edit/bookmark-edit.component';
import { BookmarksFiltersComponent } from './bookmarks-filters/bookmarks-filters.component';
import { BookmarksContainerComponent } from './bookmarks-container/bookmarks-container.component';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import { BookmarkTagsComponent } from './bookmark-tags/bookmark-tags.component';
import { BookmarksLocalService } from './bookmarks-local.service';
import { FieldValidatorDirective } from './field-validator.directive';
import { BookmarkCardComponent } from './bookmark-card/bookmark-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkEditComponent,
    BookmarksFiltersComponent,
    BookmarksContainerComponent,
    BookmarkFormComponent,
    BookmarkTagsComponent,
    FieldValidatorDirective,
    BookmarkCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, MatSliderModule, MatToolbarModule,
    MatCardModule, MatChipsModule, MatSidenavModule,
    MatProgressSpinnerModule, MatIconModule, MatListModule,
    MatDialogModule, MatSlideToggleModule, MatSelectModule, MatInputModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [BookmarkFormComponent, BookmarkTagsComponent],
  providers: [BookmarksLocalService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
