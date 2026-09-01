import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ProductsComponent } from './products/products';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ProductsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  shopName = 'TechShop';

  productBought(productName: string): void {
    alert(`Товар "${productName}" додано до кошика`);
  }
}