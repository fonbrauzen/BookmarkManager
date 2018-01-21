import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../bookmark';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.css']
})
export class BookmarkCardComponent implements OnInit {

  constructor() { }

  @Input() bookmark: Bookmark;

  ngOnInit() {
  }

}
