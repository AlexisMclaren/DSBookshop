import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookRecordFormComponent } from './create-book-record-form/create-book-record-form.component';
import { FullBookListComponent } from './full-book-list/full-book-list.component';
import { DeleteBookRecordComponent } from './delete-book-record/delete-book-record.component';
import { UpdateBookRecordComponent } from './update-book-record/update-book-record.component';
import { ChartBookCategoryComponent } from './chart-book-category/chart-book-category.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'create-book-record', component: CreateBookRecordFormComponent},
  {path: 'book-list', component: FullBookListComponent},
  {path: 'delete-book-record', component: DeleteBookRecordComponent},
  {path: 'update-book-record', component: UpdateBookRecordComponent},
  {path: 'chart-book-category', component: ChartBookCategoryComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/create-book-record', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
