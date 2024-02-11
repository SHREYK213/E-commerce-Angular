import { Component } from '@angular/core';
import { ProductService } from 'src/app/common/services/product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  productsData!:any[];

  constructor( 
   private productService:ProductService
  ){}
  ngOnInit():void{
    this.productService.getProducts().subscribe((data)=>{
      this.productsData = data;
      console.log(this.productsData);
      
    })  
  }

  convertBufferToBase64(buffer: number[]): string {
    const binary = buffer.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, '');
    return 'data:image/jpeg;base64,' + btoa(binary);
  }
}
