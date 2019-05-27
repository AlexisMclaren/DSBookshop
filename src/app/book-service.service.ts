import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './book';
import { Category } from './category';
import {AlertsService} from './alerts.service';
import{debounceTime,distinctUntilChanged}from'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private baseUrl = 'http://dsapis/api/bookshop';
  


  constructor(private http: HttpClient, private alerts: AlertsService) { }
  //Get all books in the database
  getBooks(): Observable<Book[]>{
    console.log(this.baseUrl + '/' + 'records');
    return this.http.get<Book[]>(this.baseUrl + '/' + 'records')
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }
  
  //Get list of book categories
  getLisOfCat(): Observable<Category[]>{
    console.log(this.baseUrl + '/' + 'categories');
    return this.http.get<Category[]>(this.baseUrl + '/' + 'categories')
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Category[]>('getLisOfCat',[]))
      );
  }
//Search for book by title
  searchBookTitle(term:string): Observable<Book[]>{
    console.log(this.baseUrl + '/' + 'records'+'/?title='+ term);
   
    return this.http.get<Book[]>(this.baseUrl + '/' + 'records'+'/?title='+ term)
      .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          tap(data => console.log(data)),
          catchError(this.handleError<Book[]>('searchBookTitle',[]))
    );
  
  }
  //Get books by category
  getBooksByCat(description:string): Observable<Book[]>{
    console.log(this.baseUrl + '/' + 'records'+'/?categoryex='+ description);
    return this.http.get<Book[]>(this.baseUrl + '/' + 'records'+'/?categoryex='+ description)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Book[]>('getLisOfCat',[]))
      );
  }
  //Creates books
  createBookEntry(newBook:Book): Observable<Book>{
    console.log(this.baseUrl + '/' + 'records');

    return this.http.post<Book>(this.baseUrl + '/' + 'records', newBook, httpOptions)
      .pipe(
        tap((newBook:Book) => console.log(`added book ${newBook}`)),
        catchError(this.handleError<Book>('createBookEntry'))
      );
  }
  //Get all categories of books
  getAllCat():Observable<Category[]>{
    console.log(this.baseUrl + '/' + 'categories');

    return this.http.get<Category[]>(this.baseUrl + '/' + 'categories')
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Category[]>('getAllCat')));
  }

   //Get books by record id
   getBookRecord(recordId:number):Observable<Book>{
    console.log(this.baseUrl + '/' + 'records/'+ recordId);

    return this.http.get<Book>(this.baseUrl + '/' + 'records/'+ recordId)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Book>('getBookRecord'))
        );
  }

  //Delete book entry
  deleteBook(book: Book | number):Observable<Book>{
    const id = typeof book === 'number' ? book : book.recordId;
    console.log(this.baseUrl + '/' + 'records/'+ id);
    const url = this.baseUrl + '/' + 'records/'+ id;

    return this.http.delete<Book>(url,httpOptions)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Book>('deleteBook'))
        );
  }

  //Update book entry
  updateBookRecord (book: Book): Observable<any> {
  return this.http.put(this.baseUrl + '/' + 'records/'+ book.recordId, book, httpOptions).pipe(
    tap(data => console.log(`updated book with the record ${book.recordId}`)),
    catchError(this.handleError<any>('updateBookRecord'))
  );
}
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
