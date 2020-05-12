import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products;
  constructor(private http: HttpClient) { }

  public getProducts (category) {
    let url = 'http://localhost/api/products.service.php?action=load-products';
    url += category ? "&category="+category : '';

    return this.http.get(url);

  }
}
