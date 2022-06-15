import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { Product } from 'src/app/models/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  productDetail: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.productId = params.get('id');

          if (this.productId) {
            return this.productService.getSingleProduct(this.productId);
          }
          return [null];
        })
      )
      .subscribe((data) => {
        this.productDetail = data;
      });
  }

  goToBack() {
    this.location.back();
  }
}
