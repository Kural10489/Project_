// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { PaginatePipe, PaginationService } from 'ngx-pagination';
// import { ProductDetailsComponent } from './product-details.component';

// describe('ProductDetailsComponent', () => {
//   let component: ProductDetailsComponent;
//   let fixture: ComponentFixture<ProductDetailsComponent>;

//   const fakeActivatedRoute = {
//     snapshot: { data: { } }
//   } as ActivatedRoute;

//   beforeEach(async () => {

//     await TestBed.configureTestingModule({
//       declarations: [ ProductDetailsComponent,PaginatePipe ]
//       ,providers:[HttpClient,HttpHandler,{provide: ActivatedRoute, useValue: fakeActivatedRoute},PaginationService ],
//       schemas: [
//         CUSTOM_ELEMENTS_SCHEMA
//       ],
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ProductDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
