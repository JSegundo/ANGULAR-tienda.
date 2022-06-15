import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Product,
  CreateProductDTO,
  fetchProductsPagination,
} from '../models/product.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_URL: string = `${environment.BASEAPI_URL}/products`;

  constructor(private http: HttpClient) {}

  getAllProducts(offset?: number, limit?: number) {
    return this.http.get<fetchProductsPagination>(
      `${this.API_URL}?offset=${offset}&limit=${limit}`
    );
  }

  getSingleProduct(_id: string) {
    return this.http.get<Product>(`${this.API_URL}/${_id}`);
  }

  create(newProduct: CreateProductDTO) {
    return this.http.post<Product>(this.API_URL, newProduct);
  }

  getByCategory(categoryId: string, limit?: number, offset?: number) {
    return this.http.get<Product[]>(`${this.API_URL}/category/${categoryId}`);
  }

  update() {}

  // api swagger de platzi
  // getAllProducts() {
  //   return this.http.get<Product[]>(
  //     'https://young-sands-07814.herokuapp.com/api/products?limit=20&offset=0'
  //   );
  // }
}
