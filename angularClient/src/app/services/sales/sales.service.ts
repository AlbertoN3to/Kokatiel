import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  endpoint: string = "https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/statistics/google.com/sales";

  constructor(private http: HttpClient) { }

  getSales() {
    return this.http.get(this.endpoint);
  }
}
