import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}

  notify(){
    window.alert('Produto acima de 700 reais');
  }
  
}
