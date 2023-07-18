import { Component, OnInit } from '@angular/core';

import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }
  
  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(): void {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes);
  }
  add(name: string): void {
    let color: string;
    let flavor: string;
    let recipeURL: string;
    const colorBoxElement = document.getElementById("colorBox") as HTMLInputElement;
    const flavorBoxElement = document.getElementById("flavorBox") as HTMLInputElement;
    const recipeBoxElement = document.getElementById("recipeBox") as HTMLInputElement;
    color = colorBoxElement.value;
    flavor = flavorBoxElement.value;
    recipeURL = recipeBoxElement.value;

    name = name.trim();
    color = color.trim();
    flavor.trim();
    recipeURL.trim();

    if (!name) { return; }
    this.dishService.addDish({ name, color, flavor } as Dish)
      .subscribe(dish => {
        this.dishes.push(dish);
      });
  }
  delete(dish: Dish): void {
    this.dishes = this.dishes.filter(h => h !== dish);
    this.dishService.deleteDish(dish.id).subscribe();
  }
  onKeyPress(event: KeyboardEvent, text: string) {
    if (event.key === "Enter") {
      this.add(text);
      event.preventDefault();
    }
  }
}