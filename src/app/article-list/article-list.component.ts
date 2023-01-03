import { Component } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  article : Article[] = [];
  constructor () {

  }

  ngOnInit () {
    this.article = ARTICLES;
    
    console.log(this.article)
  }

}
