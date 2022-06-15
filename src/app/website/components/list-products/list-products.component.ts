import { Component, OnInit, Input } from '@angular/core';
import {
  Product,
  CreateProductDTO,
  fetchProductsPagination,
} from 'src/app/models/product.model';
import { StoreService } from '../../../services/store.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  // para usar el store service hay importarlo e que declararlo asi en el constructor
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.ShoppingCart = this.storeService.getShoppingCart();
  }

  @Input() products: Product[] = [];
  total: number = 0;
  limitPagination: number = 10;
  offsetPagination: number = 0; // estas props se populan con getAllProducts de ngOnInit.

  productDetails = {};
  ShoppingCart: Product[] = [];
  totalPrice: number = 0;

  onAddedProductToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotal();
  }

  infoProduct: Product = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    image: '',
    images: [],
    category: {},
    rating: {},
  };

  getProductDetail(_id: string) {
    console.log('trayendo info', _id);
    return this.productsService.getSingleProduct(_id).subscribe((info) => {
      this.infoProduct = info;
      console.log('info de prod clickeado', this.infoProduct);
    });
  }

  @Input() loadmoredisabled = false;
  @Input() onLoadMore() {}
}
