import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';

import { BookmarkTag } from '../bookmark-tag';

@Component({
  selector: 'app-bookmark-tags',
  templateUrl: './bookmark-tags.component.html',
  styleUrls: ['./bookmark-tags.component.css']
})
export class BookmarkTagsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @Input() bookmarkTags: string[];

  // Enter, comma
  constructor() { }

  ngOnInit() {
  }


}


