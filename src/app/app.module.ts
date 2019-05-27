import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { CreateBookRecordFormComponent } from './create-book-record-form/create-book-record-form.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { SearchComponent } from './search/search.component';
import { FullBookListComponent } from './full-book-list/full-book-list.component';
import { DeleteBookRecordComponent } from './delete-book-record/delete-book-record.component';
import { UpdateBookRecordComponent } from './update-book-record/update-book-record.component';
import { ChartBookCategoryComponent } from './chart-book-category/chart-book-category.component';
import { ChartsModule } from 'ng2-charts';
import { AlertsComponent } from './alerts/alerts.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    
    CreateBookRecordFormComponent,
    SubNavComponent,
    SearchComponent,
    FullBookListComponent,
    DeleteBookRecordComponent,
    UpdateBookRecordComponent,
    ChartBookCategoryComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
