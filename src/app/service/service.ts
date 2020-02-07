import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

@Injectable()
export class GiphiesService {

  constructor(private httpClient: HttpClient) {
  }

  public getGiphies(value, limit, offset?: number) {
    let url = `${API_URL}${value}&limit=${limit}`;
    if (offset > 0) {
      url += `&offset=${offset}`;
    } else {
      url += `&offset=0`;
    }
    return this.httpClient.get(url);
  }

}
