import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { praktik } from '../model/praktik-model';

const baseUrl =
  'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/GetAllUsersData';

@Injectable({
  providedIn: 'root',
})
export class PraktikService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<praktik[]> {
    return this.http.get<praktik[]>(baseUrl);
  }
  get(id: any): Observable<praktik> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Post data
  post(
    name: string,
    country: string,
    city: string,
    balance: string,
    currency: string
  ) {
    const body = {
      name: name,
      country: country,
      city: city,
      balance: balance,
      currency: currency,
    };
    return this.http.post(`${baseUrl}`, body);
  }

  // Delete data
  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
