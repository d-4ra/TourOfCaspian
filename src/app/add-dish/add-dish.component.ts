import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishService } from '../dish.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishes: Dish[] = [];
  recipeLinks: Array<string>[] = [];

  constructor(
    private dishService: DishService,
    private location: Location
  ) { }

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
    let recipeURL: Array<string>[];
    const colorBoxElement = document.getElementById("colorBox") as HTMLInputElement;
    const flavorBoxElement = document.getElementById("flavorBox") as HTMLInputElement;
    const recipeBoxElement = document.getElementById("recipeBox") as HTMLInputElement;
    color = colorBoxElement.value;
    flavor = flavorBoxElement.value;
    recipeURL = this.recipeLinks;

    name = name.trim();
    color = color.trim();
    flavor.trim();

    if (!name) { return; }
    this.dishService.addDish({ name, color, flavor, img: "../assets/nopicture.jpeg", recipeURL, rating: 0} as Dish)
      .subscribe(dish => {
        this.dishes.push(dish);
      });
  }
  
  onKeyPress(event: KeyboardEvent, text: string) {
    if (event.key === "Enter") {
      this.add(text);
      event.preventDefault();
    }
  }

  addRecipe(){
    this.recipeLinks.push([])
  }
  
  removeRecipe(location: number){
    if(location !== -1){
      this.recipeLinks.splice(location, 1);
    }
  }

  back(){
    this.location.back();
  }
}
