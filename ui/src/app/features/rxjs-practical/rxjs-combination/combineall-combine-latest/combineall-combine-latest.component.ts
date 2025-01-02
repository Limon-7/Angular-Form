import { Component, OnInit } from '@angular/core';
import { concat, forkJoin, from, interval, merge, Observable, of } from 'rxjs';
import { combineAll, concatAll, filter, map, take } from 'rxjs/operators';
import { IBaseParams } from 'src/app/core/models/i-base-params';
import { IBrand } from 'src/app/core/models/i-brand';
import { IProduct } from 'src/app/core/models/i-product';
import { IProductComment } from 'src/app/core/models/i-product-comment';
import { BrandService } from 'src/app/core/services/brand.service';
import { PrintService } from 'src/app/core/services/print.service';
import { ProductCommentService } from 'src/app/core/services/product-comment.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-combineall-combine-latest',
  templateUrl: './combineall-combine-latest.component.html',
  styleUrls: ['./combineall-combine-latest.component.css']
})
export class CombineallCombineLatestComponent implements OnInit {

  combineAllId="combineAllId";
  combineAllId2="combineAllId2";

  params: IBaseParams = {
    page: 1,
    pageSize: 2,
    sort: 'name',
    filter: 'active'
  };

  products$:Observable<IProduct[]>;
  productComments$:Observable<IProductComment[]>;
  brands$:Observable<IBrand[]>;


  constructor(private printService: PrintService, private brandService:BrandService, 
    private productService:ProductService, private productCommentService:ProductCommentService) {
      this.products$=this.productService.get(this.params);
      this.productComments$=this.productCommentService.get();
      this.brands$=this.brandService.get();
   }

  ngOnInit(): void {
    // this.getBrands();
    // this.getProducts(this.params);
    // this.getProductComments();
    this.concatExample();
    this.forkJoinExample();
  }

  concatExample(){
    concat(this.products$, this.brands$, this.productComments$)
    .subscribe(val=>{console.log("values:", val)})
    // .subscribe(([products, brands, productComments])=>{
    //   console.log("Products: ", products);
    //   console.log("Brands",brands);
    //   console.log("ProductComments:",productComments);
    // });
  }
  forkJoinExample(){
    console.log("ForkJoin")
    forkJoin([this.products$, this.brands$, this.productComments$]).subscribe(([products, brands,comments])=>{
      console.log('Products:', products);
      console.log('Comments:', comments);
      console.log('Brands:', brands);
    });
  }
  getBrands():void{
    this.brandService.get<IBrand>().pipe()
    .subscribe(([{brandId, ...res},...ex])=>{
      console.log(brandId);
      console.log(res);
      console.log(ex);
    });
  }

  getProducts(params:IBaseParams){
    this.productService.get<IProduct>(params).subscribe(val=>{
      console.log("Products:",val)
    });
  }
  getProductComments(){
    this.productCommentService.get<IProductComment>(this.params).subscribe(val=>{
      console.log("Product comments", val)
    });
  }

  nextPage() {
    this.params.page++;
    this.getProducts(this.params);
  }
  previous() {
    if(this.params.page<2)
      return;
    this.params.page--;
    this.getProducts(this.params);
  }

  getCombineAll():void{
    const nyse$ = interval(1000).pipe(map(() => ({ exchange: 'NYSE', price: Math.random() * 100 })), take(3));
    const nasdaq$ = interval(1500).pipe(map(() => ({ exchange: 'NASDAQ', price: Math.random() * 100 })), take(3)); 
    const lse$ = interval(2000).pipe(map(() => ({ exchange: 'LSE', price: Math.random() * 100 })), take(3));
    const source$=from([nyse$, nasdaq$, lse$]);
    source$.pipe(
      combineAll()
    ).subscribe(value=>{
      console.log(value);

      this.printService.printJson(value, this.combineAllId2)
    });
    const outerObservable = of(
      interval(1000).pipe(take(3)), // Emits 0, 1, 2 every second
      interval(500).pipe(take(4))  // Emits 0, 1, 2, 3 every 0.5 seconds
    );
    
    // Use `combineAll` to combine the latest values of the inner observables
    outerObservable.pipe(
      combineAll()
    ).subscribe(latestValues => {
      console.log(`Latest values: ${latestValues}`);
      this.printService.print(latestValues, this.combineAllId)
    });
  }
}
