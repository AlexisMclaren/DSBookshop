import { Component, OnInit} from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { Category } from '../category';

@Component({
  selector: 'app-full-book-list',
  templateUrl: './full-book-list.component.html',
  styleUrls: ['./full-book-list.component.css']
})
export class FullBookListComponent implements OnInit {

  constructor(private bookservice:BookServiceService) { }
  
  books: Book[];

  categories: Category[];

  selectedCategory: string = '';
  
  booksByCat: Book[];
  //Drop down list of book categories to choose
  showDropDown(): void{
    this.bookservice.getLisOfCat().subscribe(Data => {console.log(Data);this.categories = Data});
  }
  //Handles the selected category and gets the list of books associated with that category
  selectChangeHandler(event: any): void{
    this.selectedCategory = event.target.value;
    this.getBooks();
  }

  ngOnInit() {
    this.showDropDown();
    this.getBooks();
  }
  //Gets a list of books depending on if all books are selected or a category
  getBooks(): void{
    this.books=[];
    this.booksByCat=[];
    console.log(this.selectedCategory);
    if(this.selectedCategory =="All Books"){
      this.bookservice.getBooks().subscribe(Data => {console.log(Data);this.books = Data});
    }
    else
    {this.bookservice.getBooksByCat(this.selectedCategory).subscribe(Data => {console.log(Data);this.booksByCat = Data});}

  }


}
