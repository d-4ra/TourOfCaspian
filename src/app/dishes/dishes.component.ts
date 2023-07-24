import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  // styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }
  
  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(): void {
    this.dishService.getDishesRatingOrder()
    .subscribe(dishes => this.dishes = dishes);
  }
  
  delete(dish: Dish): void {
    this.dishes = this.dishes.filter(h => h !== dish);
    this.dishService.deleteDish(dish.id).subscribe();
  }
}