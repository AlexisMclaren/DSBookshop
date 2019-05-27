import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { Category } from '../category';


@Component({
  selector: 'app-create-book-record-form',
  templateUrl: './create-book-record-form.component.html',
  styleUrls: ['./create-book-record-form.component.css']
})
export class CreateBookRecordFormComponent implements OnInit {

  constructor(private bookservice:BookServiceService) { }

  selectedCategory: number;
  catbookList: Category[];
  bookToCreate: Book = new Book(); 
  
  //Gets a list of book categories
  getCatOfBooks():void{
    this.bookservice.getLisOfCat().subscribe(Data => {console.log(Data);this.catbookList = Data});
  }

  //Get the the selected category
  selectChangeHandler(event: any): void{
    this.selectedCategory = event.target.value;
  }
  //Reset object
  restObj(){
    this.bookToCreate.author = null;
    this.bookToCreate.title = null;
    this.bookToCreate.categoryId = null;
    this.bookToCreate.description = null;

  }
   //Checks that all field are filled in, updates book and resets form
  submtFunc(){
    if((!this.bookToCreate.title)&&(!this.bookToCreate.author)
    &&(!this.bookToCreate.categoryId)&&(!this.bookToCreate.description)){
      console.log("Tried to submit an empty form");
      return;
    }
    else if ((!this.bookToCreate.title)||(!this.bookToCreate.author)
    ||(!this.bookToCreate.categoryId)||(!this.bookToCreate.description)){
      console.log("Please ensure that all fields are completed");
      return;
    }
    else
    console.log(this.bookToCreate);
    this.bookservice.createBookEntry(this.bookToCreate).subscribe(Data =>{
    console.log(Data);
    this.restObj();
    });
  }

  ngOnInit() {
    this.getCatOfBooks();
  }

}
