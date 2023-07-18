import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: [ './dish-detail.component.css' ]
})
export class DishDetailComponent implements OnInit {
  dish: Dish | undefined;
  editMode: boolean = false;

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

  save(): void {
    if (this.dish) {
      this.dishService.updateDish(this.dish)
        .subscribe(() => this.edit());
    }
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void{
    if(this.editMode) {this.editMode = false; return;}
    this.editMode = true;
  }

  toggleDynamicClass(): void {
    const cmdSaveElement = document.getElementById("saveButton") as HTMLInputElement;
    let dynamicClass: string = "";
    if(cmdSaveElement.className == "btn btn-primary btn-lg") 
    { dynamicClass = "btn btn-warning btn-lg" } else { dynamicClass = "btn btn-primary btn-lg"}
    if(dynamicClass == "btn btn-warning btn-lg") { cmdSaveElement.className = dynamicClass; }
  }
}