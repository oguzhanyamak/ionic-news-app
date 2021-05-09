import { ArrayType } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { Articles } from 'src/app/models/Articles';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  news: ResponseModel

  constructor(private newservice: NewsService,private bookmarkservice:BookmarkService) { 
    
  }

  ngOnInit() {}

  getNews(cat:string){
    this.newservice.getCatNews(cat).subscribe(response => {
      this.news = response
      console.log(cat)     
    })
  }

  addToBookmark(articles:Articles){
    this.bookmarkservice.addToBookmark(articles)
    }

}
