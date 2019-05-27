import { Component, OnInit } from '@angular/core';
import {SearchComponent} from '../search/search.component';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { Observable, Subject } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  title = 'Welcome to DS Book Categorisation System';
  searchedBook: Book[];

  constructor(private bookservice: BookServiceService) { }

  search(term: string): void {
    this.bookservice.searchBookTitle(term).subscribe(Data => {this.searchedBook = Data});
}
 
  ngOnInit(){

  }

}
