import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://localhost:3000/api/products/";

  constructor(private http: HttpClient) { }


  getCategory(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "getCategory");
  }
  
}
