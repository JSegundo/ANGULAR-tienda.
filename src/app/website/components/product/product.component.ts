/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges {
  constructor(private productService: ProductsService) {
    // antes del render
    // no hacer async
    // console.log('aver cuando corre el constructor');
  }

  ngOnChanges() {
    // antes del render
    // esta actualizando los cambios en los inputs. cada vez que se actualiza un valor, se ejecuta.
  }

  @Input() product: Product = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    image: '',
    images: [],
    category: {},
    rating: {},
  };

  @Output() addedProductToCart = new EventEmitter<Product>();
  @Output() showProductDetail = new EventEmitter<string>();

  ngOnInit(): void {}

  onAddToCart() {
    this.addedProductToCart.emit(this.product);
  }

  getInfoProduct() {
    console.log('selected product with id: ', this.product._id);
    this.showProductDetail.emit(this.product._id);
  }
}
