import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { Category } from '../category';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-book-category',
  templateUrl: './chart-book-category.component.html',
  styleUrls: ['./chart-book-category.component.css']
})
export class ChartBookCategoryComponent implements OnInit {
  
  
  

  public barChartOptions = {

    scaleShowVerticalLines: false,

    responsive: true

  };

  public barChartType = 'bar';

  categories: Category[];
  barChartLabels: string[] = [];
  booksByCat: Book[];
  barChartData = [];
  bookCountArray: number[] = [];

  

  constructor(private bookservice:BookServiceService) { }

  getCategoryList():void{
    this.bookservice.getLisOfCat().subscribe(Data => {
      this.categories = Data;
      
      this.categories.forEach(cat =>{
        let count:any;
        this.bookservice.getBooksByCat(cat.category1).subscribe(Data => {
          this.booksByCat = Data;

          
          count = 0;

          this.booksByCat.forEach(books=>{
            count++;
          })

          if(count>0){
            this.barChartLabels.push(cat.category1);
            this.bookCountArray.push(count);
          }
          
          //console.log('COUNT:' + count);
        });
        
       
      });

      this.barChartData = [{data: this.bookCountArray, label: 'Books'}]
        
      });
      
  }

  ngOnInit() {
    this.getCategoryList();
  }

}
