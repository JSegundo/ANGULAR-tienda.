import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAllProducts(this.offsetPagination, this.limitPagination)
      .subscribe((data) => {
        console.log(data);
        this.products = data.allProducts;
        this.offsetPagination = data.offset;
        this.limitPagination = data.limit;
        this.total = data.total;
      });
  }

  products: Product[] = [];
  total: number = 0;
  limitPagination: number = 10;
  offsetPagination: number = 0; // estas props se populan con getAllProducts de ngOnInit.

  loadmoredisabled = false;
  onLoadMore() {
    if (this.products?.length === this.total) {
      this.loadmoredisabled = true;
      return;
    }
    // const offset = this.offsetPagination + this.limitPagination; // opción para cambiar de pagina
    const offset = 0; // opción para cargar más en la misma pagina
    const limit = this.limitPagination + this.products.length;
    console.log(limit);

    this.productsService.getAllProducts(offset, limit).subscribe((data) => {
      console.log(data);
      this.products = data.allProducts;
      this.offsetPagination = data.offset;
    });
  }
}
