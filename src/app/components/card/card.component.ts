import { Component, Input } from '@angular/core';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() isHighlight: boolean = false;
  @Input() news!: News;
}
