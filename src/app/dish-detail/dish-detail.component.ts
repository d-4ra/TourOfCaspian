import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import validator from "validator";
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
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  //FORM GROUP STUFF----------------------------------------------------
  editForm = this.fb.group({
    name: [``, [Validators.required, Validators.maxLength(30)]],
    color: [``, Validators.maxLength(10)],
    flavor: [``, Validators.maxLength(100)],
    recipes: this.fb.array([])
  })

  get getForm() { return this.editForm.controls; }
  get getRecipes() {
    return this.editForm?.controls["recipes"] as FormArray;
  }

  toFormGroup = (form: AbstractControl) => form as FormGroup;

  addRecipe(){
    const recipeForm = this.fb.group({
      recipeName: ['', [Validators.required, Validators.maxLength(200)]],
      link: ['', [Validators.required, Validators.maxLength(200), this.createURLValidator()]]
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
      this.dish.name = this.editForm.value.name as string;
      this.dish.color = this.editForm.value.color as string;
      this.dish.flavor = this.editForm.value.flavor as string;

      let tempArray: Array<string>[] = [];
      this.editForm.value.recipes?.forEach((element: any) => {
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
    if(this.dish){
      this.editForm.patchValue({
        name: `${this.dish.name}`,
        color: `${this.dish.color}`,
        flavor: `${this.dish.flavor}`
      })

      this.getRecipes.clear();

      this.dish.recipeURL.forEach(element => {
        const recipeForm = this.fb.group({
          recipeName: [`${element[0]}`, [Validators.required, Validators.maxLength(200)]],
          link: [`${element[1]}`, [Validators.required, Validators.maxLength(200), this.createURLValidator()]]
        });
        this.getRecipes.push(recipeForm);
      });
    }
  }

  toggleDynamicClass(): void {
    if(this.isWarningClass == true) return;
    this.isWarningClass = !this.isWarningClass;
  }

  upvoteIt(){
    if(this.dish){
      this.dish.rating += 1;
      this.dishService.updateDish(this.dish).subscribe(() => console.log("Updated <false>"));
    }
  }

  downvoteIt(){
    if(this.dish && this.dish.rating != 0) {
      this.dish.rating -= 1;
    this.dishService.updateDish(this.dish).subscribe(() => console.log("Updated <false>"));
    }
  }

  createURLValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const validURL = validator.isURL(value);

        return !validURL ? {realURL:true}: null;
    }
  }
}