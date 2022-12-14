import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService} from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  myshoppingCart: Product[] = [];
  total: number = 0;
  products: Product [] = [] ;
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService) {
    this.myshoppingCart= this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToshoppingCart(product: Product){
    //this.myshoppingCart.push(product);
    this.storeService.addProduct(product);
  }

}
