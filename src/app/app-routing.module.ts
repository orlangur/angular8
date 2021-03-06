import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/components/news/news.component';
import {BooksComponent} from './books/components/books/books.component';
import {BookComponent} from './books/components/book/book.component';

const routes: Routes = [{path: 'news', component: NewsComponent},
  {path: '', component: BooksComponent},
  {path: 'books/:id', component: BookComponent},
  {path: 'books', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
