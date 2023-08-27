import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'https://newsapi.org/v2';
  private apiKey = environment.apiKey;

  constructor() {}

  async getTopHeadlines() {
    const url = `${this.baseUrl}/top-headlines`;
    const params = {
      country: 'us',
      apiKey: this.apiKey,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }
}
