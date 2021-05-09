import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/Articles';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  News : Articles[];
  constructor(private bookmarkservice:BookmarkService) { }

  ngOnInit() {
    this.getBookMark()
  }

  getBookMark(){
    this.News = this.bookmarkservice.list();
  }
}
