import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  configURL = '../assets/data/publicReportingData.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.configURL);
  }
}
