import { Component, OnInit, ViewChild, Input, Inject, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import { BookmarkTagsComponent } from '../bookmark-tags/bookmark-tags.component';
import { Bookmark } from '..//bookmark';
import { FieldValidatorDirective } from '..//field-validator.directive';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.css']
})
export class BookmarkFormComponent implements OnInit {

  // @ViewChild(BookmarkTagsComponent)
  // private bookmarkTagsComponent: BookmarkTagsComponent;
  bookmarkForm: FormGroup;
  tags: string[];
  separatorKeysCodes = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  constructor(
    public dialogRef: MatDialogRef<BookmarkFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark,
    private fb: FormBuilder) {
    this.createForm();
  }
  // AfterViewInit() {
  //   this.bookmarkTagsComponent.bookmarkTags = this.data.tags;
  // }
  createForm() {
    this.bookmarkForm = this.fb.group({
      name: [this.data.name, Validators.required],
      url: [this.data.url, [Validators.required, FieldValidatorDirective.validateCharacters]],
      description: this.data.description,
      isHidden: this.data.isHidden,
      // tags: this.data.tags
    });
    this.tags = this.data.tags;
    // this.bookmarkTagsComponent.bookmarkTags = this.data.tags;
  }

  // getErrorMessage() {
  //   return this.bookmarkForm. .hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onSubmit(): void {
    const resultBookmark = this.getNewBookmarkFromForm();
    this.dialogRef.close(resultBookmark);
  }

  getNewBookmarkFromForm(): Bookmark {
    const form = this.bookmarkForm;
    const b = new Bookmark();
    if (this.data.id !== undefined) {
      b.id = this.data.id;
      b.timeStamp = this.data.timeStamp;
    }
    b.name = this.getFormControlValue('name');
    b.url = this.getFormControlValue('url');
    b.description = this.getFormControlValue('description');
    b.isHidden = this.getFormControlValue('isHidden');
    b.tags = this.tags;
    return b;
  }

  getFormControlValue(control: string): any {
    return this.bookmarkForm.get(control).value;
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit() {
  }

}
