import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: [ './dish-search.component.css' ]
})
export class DishSearchComponent implements OnInit {
  dishes$!: Observable<Dish[]>;
  private searchTerms = new Subject<string>();

  constructor(private dishService: DishService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dishes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dishService.searchDishes(term)),
    );
  }
}