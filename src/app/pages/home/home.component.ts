import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isMobile: boolean;
  articles = [];
  highlightList = [];
  commonList = [];

  constructor(private newsService: NewsService) {
    this.isMobile = window.innerWidth < 600;
    this.newsService.getTopHeadlines().then((articles) => {
      this.articles = articles;
      this.highlightList = articles.slice(0, 3);
      this.commonList = articles.slice(3);
    });
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 600;
    });
  }

}
