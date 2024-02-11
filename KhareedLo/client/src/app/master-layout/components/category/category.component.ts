import { Component } from '@angular/core';
import { CategoryService } from 'src/app/common/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories!:any[];

  constructor( 
   private categoryService:CategoryService
  ){}
  ngOnInit():void{
    this.categoryService.getProducts().subscribe((data)=>{
      this.categories = data.category;
      console.log(this.categories);
      
    })  
  }
}
