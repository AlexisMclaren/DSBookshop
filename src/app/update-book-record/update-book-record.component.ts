import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { Category } from '../category';

@Component({
  selector: 'app-update-book-record',
  templateUrl: './update-book-record.component.html',
  styleUrls: ['./update-book-record.component.css']
})
export class UpdateBookRecordComponent implements OnInit {

  constructor(private bookservice:BookServiceService) { }
  books: Book[];
  bookToUpdate: Book = new Book();
  Bookcategories: Category[];
  selectedBook: number;
  selectedCategory: number;
  response: any;

  //Shows a drop down list of saved books
  showSavedBooks(): void{
      this.bookservice.getBooks().subscribe(Data => {console.log(Data);this.books = Data});
  }
  //Resets the objects variables
  restObj(){
    this.bookToUpdate.author = null;
    this.bookToUpdate.title = null;
    this.bookToUpdate.categoryId = null;
    this.bookToUpdate.description = null;
  }
  //Checks that all field are filled in, updates book and resets form  
  submtFunc(){
    if((!this.bookToUpdate.title)&&(!this.bookToUpdate.author)
    &&(!this.bookToUpdate.categoryId)&&(!this.bookToUpdate.description)){
      console.log("Tried to submit an empty form");
      return;
    }
    else if ((!this.bookToUpdate.title)||(!this.bookToUpdate.author)
    ||(!this.bookToUpdate.categoryId)||(!this.bookToUpdate.description)){
      console.log("Please ensure that all fields are completed");
      return;
    }
    else
    console.log(this.bookToUpdate);
    this.addUpdatedBook();
    this.restObj();
  }

  //Shows a drop down list of categories
  showCategories(): void{
    this.bookservice.getAllCat().subscribe(Data => {console.log(Data);this.Bookcategories = Data});
}
  //Assigns the target value selected from book options
  selectBook(event: any): void{
    this.selectedBook = event.target.value;
    this.getBook();
  }
  //Assigns the target value selected from category options
  selectCategory(event: any): void{
    this.selectedCategory = event.target.value;
    
  }

  //Gets the current book
  getBook():void{
    this.bookservice.getBookRecord(this.selectedBook).subscribe(Data => {console.log(Data);this.bookToUpdate = Data});
    
  }
  //Update book record
  addUpdatedBook():void{
    this.bookservice.updateBookRecord(this.bookToUpdate).subscribe(Data => {console.log(Data);this.response = Data});
  }

  ngOnInit() {
    this.showSavedBooks();
    this.showCategories();
  }

}
