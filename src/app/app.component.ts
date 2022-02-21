import { Component, OnInit } from '@angular/core';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'infinte-scroller';
  quotes: any[] = [];
  page = 2;
  limit = 10;
  scrollCount = 0;
  constructor(private quotesService: QuoteService) {}

  ngOnInit(): void {
    this.onLoad();
  }
  onScroll() {
    if (this.scrollCount === 0) {
      return;
    }
    console.log('Scrolled!');
    this.quotesService.getQuotes(this.page++, this.limit).subscribe((data) => {
      // console.log(data);
      this.quotes.push(...data.data);
      // console.log(this.quotes);
    });
  }

  onLoad() {
    this.quotesService
      .getQuotes(1, 25)
      .subscribe((data: { total: number; data: any[] }) => {
        // console.log(data);
        this.quotes.push(...data.data);
        // console.log(this.quotes);
        this.scrollCount++;
      });
  }
}
