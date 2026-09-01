import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input() productName!: string;
  @Input() price!: number;
  @Input() description!: string;

  @Output() buy = new EventEmitter<string>();

  onBuy(): void {
    this.buy.emit(this.productName);
  }
}