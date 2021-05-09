import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/Articles';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private bookmarkservice:BookmarkService) { }
  news:Articles[]
  ngOnInit() {
    this.getNews()
  }

  getNews(){
  this.news = this.bookmarkservice.getList()
  }

}
