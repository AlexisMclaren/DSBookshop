import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';

@Component({
  selector: 'app-delete-book-record',
  templateUrl: './delete-book-record.component.html',
  styleUrls: ['./delete-book-record.component.css']
})
export class DeleteBookRecordComponent implements OnInit {

  constructor(private bookservice:BookServiceService) { }
  opened = false;
  books: Book[];
  bookId = new Book();
  //Gets a list of books depending on if all books are selected or a category
  getBooks(): void{
    this.bookservice.getBooks().subscribe(Data => {console.log(Data);this.books = Data});
  }
  //Deletes the book
  deletBook(book:Book): void{
    this.bookservice.deleteBook(book).subscribe(Data => {console.log(Data)});
  }
  //Confirmation to delete book
  confirmation():void{
  this.opened = false;
  this.deletBook(this.bookId)
  console.log(this.bookId);
  }
  //Get the id of the selected book to delete
  getId(book:Book):void{
    this.opened = true;
    this.bookId.recordId = book.recordId;
  }

  ngOnInit() {
    this.getBooks();
  }

}
