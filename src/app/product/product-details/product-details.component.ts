import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';
import { ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  public products: any = [];
  public singleProduct: any;

  public recommendedProducts: any;
  public pagination: number = 1;
  private allProducts = 10;

  public ratingCount = 0;
  public totalRating = 0;
  public ratingControl = new FormControl(0);
  public finalRating: any;
  public userReviewComment: string = '';
  public reviews: any;
  public productid!: number;
  // Adding product to cart
  public size: any;
  public quantity: any;
  // public customer =this.user.getCustomerName();

  @ViewChild('imageSlide') imageSlide: ElementRef | undefined;
  @ViewChild('review') review: ElementRef | undefined;
  @ViewChild('rating') rating: ElementRef | undefined;

  constructor(
    private http: HttpService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private cart: CartService,
    public user: UserService
  ) {
    this.http.getpaginatedProducts(this.pagination).subscribe({
      next: (res) => (this.recommendedProducts = res),
      error: (err: any) =>
        console.log('err',err)
        // this.user.navigateToNetworkError(),
  });
  }

  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.paramMap.subscribe({
      next: (data: any) => {
        id = data.params.id;
        this.productid = id;
        this.http.getProducts(id).subscribe({
          next: (res) => {
            this.products = res;
            this.products = this.products.filter((data: any) => data.id == id);
            if (this.products.length <= 0) {
              this.route.navigateByUrl('');
            }
            this.singleProduct = this.products[0];
          },
          error: (err: any) => {
            console.log('err', err);
            // this.user.navigateToNetworkError();
          },
        })

      },error: (err: any) => {
        console.log('err', err);
        // this.user.navigateToNetworkError();
      },
    });
  }

  public productImage1(singleProduct: any) {
    this.imageSlide?.nativeElement.setAttribute('src', singleProduct.image);
  }
  public productImage2(singleProduct: any) {
    this.imageSlide?.nativeElement.setAttribute('src', singleProduct.image2);
  }
  public productImage3(singleProduct: any) {
    this.imageSlide?.nativeElement.setAttribute('src', singleProduct.image3);
  }
  public productImage4(singleProduct: any) {
    this.imageSlide?.nativeElement.setAttribute('src', singleProduct.image4);
  }
  public getRating() {
    this.ratingCount++;
    this.totalRating += this.ratingControl?.value || 0;
    this.finalRating = (this.totalRating / this.ratingCount).toFixed(1);
  }
  public sizeOfProduct(event: any) {
    let size = event.target.value;
    this.size = size;
  }
  public quantityOfProduct(event: any) {
    let quantity = event.target.value;
    this.quantity = quantity;
  }

  public addToCart(product: any) {
    product.size = this.size || 'S';
    product.quantity = this.quantity || 1;
    this.cart.totalItems++;
    this.cart.productIds.push(product.id);
    let totalAmount=product.price*product.quantity
    this.cart.totalCost.push(product.price*product.quantity);
    // product.username = this.customer;
    product.totalAmount=totalAmount;
    console.log(product);

    this.cart.postCart(product).subscribe({
      error: (err) => {
        // this.user.navigateToNetworkError();
      },
    });
  }
}
