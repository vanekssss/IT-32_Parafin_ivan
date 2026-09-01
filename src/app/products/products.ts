import { Component, Output, EventEmitter } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  @Output() productBought = new EventEmitter<string>();

  buyProduct(productName: string): void {
    this.productBought.emit(productName);
  }
}