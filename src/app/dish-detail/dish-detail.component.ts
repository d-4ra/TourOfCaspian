import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../dish';
import { DishService } from '../dish.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: [ './dish-detail.component.css' ]
})
export class DishDetailComponent implements OnInit {
  dish: Dish | undefined;
  editMode: boolean = false;
  isWarningClass: boolean = false;
  recipeLinks: Array<string>[] = [];

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDish();
  }

  getDish(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dishService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  save(subscribeBool: boolean): void {
    if (this.dish) {
      if(subscribeBool) {
        this.dishService.updateDish(this.dish)
        .subscribe(() => {this.edit(); this.isWarningClass = false});
      } else{
        this.dishService.updateDish(this.dish).subscribe(() => console.log("Updated <false>"));
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void{
    if(this.editMode) {this.editMode = false; return;}
    this.editMode = true;
    if(this.dish) this.recipeLinks = this.dish.recipeURL;
  }

  toggleDynamicClass(): void {
    if(this.isWarningClass == true) return;
    this.isWarningClass = !this.isWarningClass;
  }

  upvoteIt(){
    if(this.dish)
    this.dish.rating += 1;
    this.save(false);
  }

  downvoteIt(){
    if(this.dish && this.dish.rating != 0)
    this.dish.rating -= 1;
    this.save(false);
  }

  removeRecipe(location: number){
    if(location !== -1){
      this.recipeLinks.splice(location, 1);
    }
  }
  
  addRecipe(){
    this.recipeLinks.push([])
  }
}