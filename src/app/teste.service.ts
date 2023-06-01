import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private HttpClient: HttpClient) { }

  public getCars() : any {
    return this.HttpClient.get('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json');
  }

}
