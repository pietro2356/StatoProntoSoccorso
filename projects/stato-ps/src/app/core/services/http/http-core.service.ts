import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

type HttpBody = object | string | number | boolean | null;

@Injectable({
  providedIn: 'root'
})
export class HttpCoreService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string) {
    return this.http.get<T>(url).pipe(retry(3));
  }

  public post<T>(url: string, body: HttpBody) {
    return this.http.post<T>(url, body).pipe(retry(3));
  }

  public put<T>(url: string, body: never) {
    return this.http.put<T>(url, body).pipe(retry(3));
  }

  public delete<T>(url: string) {
    return this.http.delete<T>(url).pipe(retry(3));
  }

  public patch<T>(url: string, body: never) {
    return this.http.patch<T>(url, body).pipe(retry(3));
  }

  public head<T>(url: string) {
    return this.http.head<T>(url).pipe(retry(3));
  }
}
