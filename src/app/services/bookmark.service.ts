import { Injectable } from '@angular/core';
import { Articles } from '../models/Articles';
import { News } from '../models/News'
import { news } from '../models/News1';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }

  addToBookmark(articles:Articles){
    let item = News.find(c => c.title === articles.title);
    if(item){
      console.log("zaten var")
    }
    else{
      News.push(articles)
    }
  }

  addToPage(articles:Articles){
    news.push(articles)
  }
  getList(){
    return news
  }

  list(){
    return News
  }
}
