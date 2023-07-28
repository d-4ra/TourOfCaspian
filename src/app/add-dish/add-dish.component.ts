import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Dish } from '../dish';
import { DishService } from '../dish.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishes: Dish[] = [];
  submitted: boolean = false;

  recipeLinks = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    color: ['', Validators.maxLength(10)],
    flavor: ['', Validators.maxLength(100)],
    recipes: this.fb.array([])
  })

  get getForm() { return this.recipeLinks.controls; }
  get getRecipes() {
    return this.recipeLinks.controls["recipes"] as FormArray;
  }

  constructor(
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDishes();
    this.addRecipe();
  }

  onSubmit() {
    this.submitted = true;

    if (this.recipeLinks.invalid) {
      return;
    }

    this.add();
  }

  getDishes(): void {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes);
  }
  
  add(): void {
    let name = this.recipeLinks.value.name?.trim();
    let color = this.recipeLinks.value.color?.trim();
    let flavor = this.recipeLinks.value.flavor?.trim();
    let recipeURL = this.recipeLinks.value.recipes; //? this.recipeLinks.value.recipes : [];

    let arrayifiedRecipeURL: Array<string>[] = [];
    for (let i = 0; i < (this.recipeLinks.value.recipes?.length || 0); i++) {
      const recipe = this.recipeLinks.value.recipes?.[i] as { recipeName: string; link: string };
      arrayifiedRecipeURL.push([recipe.recipeName, recipe.link]);
    }
    recipeURL = arrayifiedRecipeURL;

    if (!name) { return; }
    this.dishService.addDish({ name, color, flavor, img: "../assets/nopicture.jpeg", recipeURL, rating: 0 } as Dish)
      .subscribe(dish => {
        this.dishes.push(dish);
      });
    this.router.navigate(['/dishes']); //Job done get outta here!
}

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

  toFormGroup = (form: AbstractControl) => form as FormGroup;

  back(){
    this.location.back();
  }
}

// onKeyPress(event: KeyboardEvent, text: string) {
  //   if (event.key === "Enter") {
  //     this.add(text);
  //     event.preventDefault();
  //   }
  // }