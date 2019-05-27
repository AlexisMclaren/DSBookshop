import { Component, OnInit, Input} from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private bookservice: BookServiceService) { }
  //Binds to the searchedBook property in head.component.ts
  @Input() search: Book[];

  removeSearch():void{
    this.search=null;
  }
  ngOnInit() {
  }

}
