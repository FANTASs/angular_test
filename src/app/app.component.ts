import { Component } from '@angular/core';
import { GiphiesService } from './service/service';
import { debounce } from 'rxjs/operators';
import { interval } from 'rxjs';
import { IGiphies, IRes } from './interface/giphies.type';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Welcome to GiphySearch';
  maxCounterPagination: number;
  index = 1;
  giphies: IGiphies[] = [];
  totalCounterGiphy: number;
  offset = 0;
  limit = 9;
  searchTerma: string;

  constructor(private giphiesService: GiphiesService) {
  }

  public performSearch(searchTerm: HTMLInputElement): void {
    this.searchTerma = searchTerm.value;
    this.giphiesService.getGiphies(searchTerm.value, this.limit, this.offset)
      .pipe(debounce(() => interval(300)))
      .subscribe((res: IRes) => {
        const { data, pagination } = res;
        this.giphies = data;
        this.totalCounterGiphy = pagination.total_count;
        this.maxCounterPagination = Math.round(pagination.total_count / 9);
    });
  }

  public disabledPreviousButton(): boolean {
    return this.index === 1;
  }

  public disabledNextButton(): boolean {
    return this.maxCounterPagination === this.index;
  }

  public nextPage(): void {
    if (this.index + 2 < this.maxCounterPagination) {
      this.index++;
    }
    this.offset += this.limit;
    this.getGiphies();
  }

  public nextIndexPage(numberPage: number): void {
    if (this.index + 2 >= this.maxCounterPagination) {
      this.index = numberPage - 2;
    } else {
      this.index = numberPage;
    }
    this.offset = this.limit * (numberPage - 1);
    this.getGiphies();
  }

  public previousPage(): void {
    this.index--;
    this.offset -= this.limit;
    this.getGiphies();
  }

  private getGiphies(): void {
    this.giphiesService.getGiphies(this.searchTerma, this.limit, this.offset).subscribe((res) => {
      this.giphies = res['data'];
      this.maxCounterPagination = Math.ceil(res['pagination'].total_count / 9);
    });
  }
}
