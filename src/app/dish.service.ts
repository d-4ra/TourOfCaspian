import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Dish } from './dish';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DishService {
  private dishesUrl = 'api/dishes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.dishesUrl)
      .pipe(
        tap(_ => this.log('fetched dishes')),
        catchError(this.handleError<Dish[]>('getDishes', []))
      );
  }
  getDishesRatingOrder(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.dishesUrl).pipe(
      map((dishes: Dish[]) => {
        dishes.sort((a, b) => b.rating - a.rating);
        return dishes;
      })
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getDish(id: number): Observable<Dish> {
    const url = `${this.dishesUrl}/${id}`;
    return this.http.get<Dish>(url).pipe(
      tap(_ => this.log(`fetched dish id=${id}`)),
      catchError(this.handleError<Dish>(`getDish id=${id}`))
    );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DishService: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** PUT: update the hero on the server */
  updateDish(dish: Dish): Observable<any> {
    return this.http.put(this.dishesUrl, dish, this.httpOptions).pipe(
      tap(_ => this.log(`updated dish=${dish.name}`)),
      catchError(this.handleError<any>('updateDish'))
    );
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  /** POST: add a new hero to the server */
  addDish(newDish: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.dishesUrl, newDish, this.httpOptions).pipe(
      tap((newDish: Dish) => this.log(`added dish w/ name=${newDish.name}`)),
      catchError(this.handleError<Dish>('addDish'))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteDish(id: number): Observable<Dish> {
    const url = `${this.dishesUrl}/${id}`;

    return this.http.delete<Dish>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted dish id=${id}`)),
      catchError(this.handleError<Dish>('deleteDish'))
    );
  }
  /* GET heroes whose name contains search term */
  searchDishes(term: string): Observable<Dish[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Dish[]>(`${this.dishesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found dishes matching "${term}"`) :
        this.log(`no dishes matching "${term}"`)),
      catchError(this.handleError<Dish[]>('searchDishes', []))
    );
  }
}