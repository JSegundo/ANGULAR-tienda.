import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from 'src/app/models/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');

          if (this.categoryId) {
            return this.productService.getByCategory(this.categoryId);
          }
          return [];
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.products = data;
      });
  }
}
