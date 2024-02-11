import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }
  storedEmail!: string;

  baseUrl = "http://localhost:3000/api/products";

  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/getAllProducts");
  }}
