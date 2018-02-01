import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        MatDialogModule, MatSlideToggleModule, MatSelectModule, MatInputModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Bookmark manager'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bookmark manager');
  }));
  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#app-title').textContent).toContain('Bookmark manager');
  }));
});
