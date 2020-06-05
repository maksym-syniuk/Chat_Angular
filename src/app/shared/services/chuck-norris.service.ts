import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }

  fetchMessages() {
    return this.http.get('https://api.chucknorris.io/jokes/random')
      .pipe(
        delay(500),
        map((response: any) => {
          return response.value;
        }
        )
      );
  }
}
