import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from 'src/app/models/Articles';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { NewsService } from '../../services/news.service'



@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  news: ResponseModel
  author :string
  constructor(private newservice: NewsService,private bookmarkservice:BookmarkService,private router:Router) { 

    
  }

  ngOnInit() {
    this.getnews()
  }

  getnews(){
    this.newservice.getNews().subscribe(response => {
      this.news = response
      console.log(response)     
    })
  }

  addToBookmark(articles:Articles){
    this.bookmarkservice.addToBookmark(articles)
    }

  btnClicked(articles:Articles){
    this.bookmarkservice.addToPage(articles)
    this.router.navigate(['tabs/tab4'])
  }

  
}
