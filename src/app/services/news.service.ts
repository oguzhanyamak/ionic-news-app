import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string = "https://newsapi.org/v2/top-headlines?country="
  apiKey:string = "&apiKey=b683c95af372471d9334cdbe14eeecf8"

  getNews():Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.baseUrl+"tr"+this.apiKey)
  }

  getCatNews(category:string):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.baseUrl+"tr"+"&category="+category+this.apiKey) 
  }
}
