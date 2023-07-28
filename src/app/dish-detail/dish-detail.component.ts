import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
  isWarningClass: boolean = false;
  editForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  //FORM GROUP STUFF----------------------------------------------------
  get getForm() { return this.editForm.controls; }
  get getRecipes() {
    return this.editForm?.controls["recipes"] as FormArray;
  }

  toFormGroup = (form: AbstractControl) => form as FormGroup;

  addRecipe(){
    const recipeForm = this.fb.group({
      recipeName: ['', [Validators.required, Validators.maxLength(200)]],
      link: ['', [Validators.required, Validators.maxLength(200)]]
    });
    this.getRecipes.push(recipeForm);
  }

  removeRecipe(location: number){
    this.getRecipes.removeAt(location);
  }
  //FORM GROUP ABOVE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ngOnInit(): void {
    this.getDish();
  }

  getDish(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dishService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }
  
  onSubmit(){
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.save(true);
  }
  
  save(subscribeBool: boolean): void {
    if (this.dish) {
      this.setSaveValues();

      if(subscribeBool) {
        this.dishService.updateDish(this.dish)
        .subscribe(() => {this.edit(); this.isWarningClass = false});
      } else{
        this.dishService.updateDish(this.dish).subscribe(() => console.log("Updated <false>"));
      }
      this.submitted = false;
    }
  }

  setSaveValues(){
    if(this.dish){
      this.dish.name = this.editForm.value.name;
      this.dish.color = this.editForm.value.color;
      this.dish.flavor = this.editForm.value.flavor;

      let tempArray: Array<string>[] = [];
      this.editForm.value.recipes.forEach((element: any) => {
        tempArray.push([element.recipeName, element.link])
      });
      this.dish.recipeURL = tempArray;
    }
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void{
    if(this.editMode) {this.editMode = false; return;}
    this.editMode = true;

    this.setEditFormData();
  }

  setEditFormData(){
    this.editForm = this.fb.group({
      name: [`${this.dish?.name}`, [Validators.required, Validators.maxLength(30)]],
      color: [`${this.dish?.color}`, Validators.maxLength(10)],
      flavor: [`${this.dish?.flavor}`, Validators.maxLength(100)],
      recipes: this.fb.array([])
    })

    this.dish?.recipeURL.forEach(element => {
      const recipeForm = this.fb.group({
        recipeName: [`${element[0]}`, [Validators.required, Validators.maxLength(200)]],
        link: [`${element[1]}`, [Validators.required, Validators.maxLength(200)]]
      });
      this.getRecipes.push(recipeForm);
    });
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
}