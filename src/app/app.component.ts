import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environment/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-api-products';

  http = inject(HttpClient);
  products: any = [];
  ngOnInit(): void {
    this.fetchProducts();
  }
  async fetchProducts() {
    this.http.get(`${environment.api}`).subscribe((products: any) => {
      console.log(products);
      this.products = products;
    });
  }
}
