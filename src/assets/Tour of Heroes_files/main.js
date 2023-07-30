"use strict";
(self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["main"],{

/***/ 4948:
/*!************************************************!*\
  !*** ./src/app/add-dish/add-dish.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDishComponent: () => (/* binding */ AddDishComponent),
/* harmony export */   createURLValidator: () => (/* binding */ createURLValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ 18);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dish.service */ 6695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);







function AddDishComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max 30 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddDishComponent_div_5_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddDishComponent_div_5_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getForm.name.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getForm.name.errors["maxlength"]);
  }
}
function AddDishComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddDishComponent_div_11_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.getForm.color.errors["maxlength"]);
  }
}
function AddDishComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddDishComponent_div_12_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getForm.flavor.errors["maxlength"]);
  }
}
function AddDishComponent_ng_container_14_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Recipe name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_ng_container_14_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_ng_container_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddDishComponent_ng_container_14_div_8_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddDishComponent_ng_container_14_div_8_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipeForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = recipeForm_r8.get("recipeName")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = recipeForm_r8.get("recipeName")) == null ? null : tmp_1_0.hasError("maxlength"));
  }
}
function AddDishComponent_ng_container_14_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Link is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_ng_container_14_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_ng_container_14_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddDishComponent_ng_container_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddDishComponent_ng_container_14_div_9_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddDishComponent_ng_container_14_div_9_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddDishComponent_ng_container_14_div_9_div_3_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipeForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = recipeForm_r8.get("link")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = recipeForm_r8.get("link")) == null ? null : tmp_1_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = recipeForm_r8.get("link")) == null ? null : tmp_2_0.hasError("realURL"));
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function AddDishComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 17)(2, "li", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 20)(5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDishComponent_ng_container_14_Template_span_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const i_r9 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.removeRecipe(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddDishComponent_ng_container_14_div_8_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddDishComponent_ng_container_14_div_9_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const recipeForm_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.toFormGroup(recipeForm_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r3.submitted && ((tmp_1_0 = recipeForm_r8.get("recipeName")) == null ? null : tmp_1_0.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r3.submitted && ((tmp_2_0 = recipeForm_r8.get("link")) == null ? null : tmp_2_0.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ((tmp_3_0 = recipeForm_r8.get("recipeName")) == null ? null : tmp_3_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ((tmp_4_0 = recipeForm_r8.get("link")) == null ? null : tmp_4_0.errors));
  }
}
class AddDishComponent {
  get getForm() {
    return this.recipeLinks.controls;
  }
  get getRecipes() {
    return this.recipeLinks.controls["recipes"];
  }
  constructor(dishService, location, fb, router) {
    this.dishService = dishService;
    this.location = location;
    this.fb = fb;
    this.router = router;
    //dishes: Dish[] = [];
    this.submitted = false;
    this.recipeLinks = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(30)]],
      color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10)],
      flavor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100)],
      recipes: this.fb.array([])
    });
    this.toFormGroup = form => form;
  }
  ngOnInit() {
    this.addRecipe();
  }
  onSubmit() {
    this.submitted = true;
    if (this.recipeLinks.invalid) {
      return;
    }
    this.add();
  }
  getDishes() {
    // this.dishService.getDishes()
    // .subscribe(dishes => this.dishes = dishes);
  }
  add() {
    let name = this.recipeLinks.value.name?.trim();
    let color = this.recipeLinks.value.color?.trim();
    let flavor = this.recipeLinks.value.flavor?.trim();
    let recipeURL = this.recipeLinks.value.recipes; //? this.recipeLinks.value.recipes : [];
    let arrayifiedRecipeURL = [];
    for (let i = 0; i < (this.recipeLinks.value.recipes?.length || 0); i++) {
      const recipe = this.recipeLinks.value.recipes?.[i];
      arrayifiedRecipeURL.push([recipe.recipeName, recipe.link]);
    }
    recipeURL = arrayifiedRecipeURL;
    if (!name) {
      return;
    }
    this.dishService.addDish({
      name,
      color,
      flavor,
      img: "../assets/nopicture.jpeg",
      recipeURL,
      rating: 0
    }).subscribe(dish => {
      // this.dishes.push(dish);
    });
    this.router.navigate(['/dishes']); //Job done get outta here!
  }

  addRecipe() {
    const recipeForm = this.fb.group({
      recipeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(200)]],
      link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(200), createURLValidator()]]
    });
    this.getRecipes.push(recipeForm);
  }
  removeRecipe(location) {
    this.getRecipes.removeAt(location);
  }
  back() {
    this.location.back();
  }
}
// onKeyPress(event: KeyboardEvent, text: string) {
//   if (event.key === "Enter") {
//     this.add(text);
//     event.preventDefault();
//   }
// }
AddDishComponent.ɵfac = function AddDishComponent_Factory(t) {
  return new (t || AddDishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dish_service__WEBPACK_IMPORTED_MODULE_0__.DishService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AddDishComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddDishComponent,
  selectors: [["app-add-dish"]],
  decls: 25,
  vars: 14,
  consts: [[3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-text"], ["type", "text", "formControlName", "name", "placeholder", "Name...", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "color", "placeholder", "Color...", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "flavor", "placeholder", "Flavor...", 1, "form-control", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "row"], [1, "col"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "title", "add dish", 1, "btn", "btn-success", "m-2", 3, "click"], [1, "col", "text-end"], ["type", "button", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "list-group"], [1, "list-group-item"], [1, "input-group", 3, "formGroup"], ["type", "text", "formControlName", "recipeName", "placeholder", "Recipe name...", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "link", "placeholder", "Link...", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function AddDishComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddDishComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Dish");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddDishComponent_div_5_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Optional");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5)(10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddDishComponent_div_11_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddDishComponent_div_12_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddDishComponent_ng_container_14_Template, 10, 9, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDishComponent_Template_button_click_18_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDishComponent_Template_span_click_20_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13)(23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDishComponent_Template_button_click_23_listener() {
        return ctx.addRecipe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Add a recipe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.recipeLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.getForm.name.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.getForm.name.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.getForm.color.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.getForm.flavor.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.getForm.color.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.getForm.flavor.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getRecipes.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
function createURLValidator() {
  return control => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const validURL = validator__WEBPACK_IMPORTED_MODULE_5___default().isURL(value);
    return !validURL ? {
      realURL: true
    } : null;
  };
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dishes/dishes.component */ 9653);
/* harmony import */ var _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dish-detail/dish-detail.component */ 45);
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-dish/add-dish.component */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'detail/:id',
  component: _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_2__.DishDetailComponent
}, {
  path: 'dishes',
  component: _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_1__.DishesComponent
}, {
  path: 'add-dish',
  component: _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_3__.AddDishComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/messages.component */ 8853);



class AppComponent {
  constructor() {
    this.title = 'Tour of Caspian';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 12,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-center"], ["routerLink", "/dashboard", 1, "btn", "btn-lg", "btn-secondary"], [1, "mx-3"], [1, "shadow-lg", "p-3", "mb-4", "bg-white", "rounded"], ["routerLink", "/dishes", 1, "btn", "btn-lg", "btn-secondary"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav")(8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dishes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet")(11, "app-messages");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0ciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXNcbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjM2QzZDNkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1NDVDO1xufVxubmF2IGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5teS1hLXRhZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUyNWM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtYXJnaW46IC41cmVtIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblxuICBvcmRlcjogMDtcbiAgZmxleDogMCAxIGF1dG87XG4gIGFsaWduLXNlbGY6IGF1dG87XG59ICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dish-detail/dish-detail.component */ 45);
/* harmony import */ var _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes/dishes.component */ 9653);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ 8853);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-in-memory-web-api */ 5402);
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-memory-data.service */ 9719);
/* harmony import */ var _dish_search_dish_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dish-search/dish-search.component */ 1189);
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-dish/add-dish.component */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);



















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__.HttpClientInMemoryWebApiModule.forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__.InMemoryDataService, {
    dataEncapsulation: false
  }), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__.BsDropdownModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_3__.DishesComponent, _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_2__.DishDetailComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__.MessagesComponent, _dish_search_dish_search_component__WEBPACK_IMPORTED_MODULE_7__.DishSearchComponent, _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_8__.AddDishComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__.HttpClientInMemoryWebApiModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__.BsDropdownModule]
  });
})();

/***/ }),

/***/ 4225:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dish.service */ 6695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dish_search_dish_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dish-search/dish-search.component */ 1189);





function DashboardComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dish_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", dish_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dish_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](dish_r1.rating);
  }
}
class DashboardComponent {
  constructor(dishService) {
    this.dishService = dishService;
    this.dishes = [];
  }
  ngOnInit() {
    this.getDishes();
  }
  getDishes() {
    this.dishService.getDishesRatingOrder().subscribe(dishes => this.dishes = dishes.slice(0, 4));
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dish_service__WEBPACK_IMPORTED_MODULE_0__.DishService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 13,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-center"], [1, "nav", "nav-pills", "nav-fill"], ["class", "nav-item nav-link active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["width", "640", "height", "360", "muted", "", "autoplay", "", "loop", ""], ["src", "../assets/kitchen.mp4", "type", "video/mp4"], [1, "m-2", "h5"], [1, "nav-item", "nav-link", "active", 3, "routerLink"], [1, "badge", "text-bg-dark"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Top Rated Dishes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0)(4, "nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashboardComponent_a_5_Template, 4, 3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-dish-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "video", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "source", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Your browser does not support the video tag. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Welcome to the Tour of Caspian, search, add and view several mysterious persian dishes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dishes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _dish_search_dish_search_component__WEBPACK_IMPORTED_MODULE_1__.DishSearchComponent],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStDSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlc1xuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuZGlzaGVzLW1lbnUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUyNWM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbjogLjVyZW0gYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBcbiAgICBvcmRlcjogMDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgYSB7XG4gICAgICB3aWR0aDogMTglO1xuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgfVxuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB9ICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 45:
/*!******************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DishDetailComponent: () => (/* binding */ DishDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-dish/add-dish.component */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dish.service */ 6695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);








function DishDetailComponent_div_0_ul_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dishRecipe_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", dishRecipe_r6[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](dishRecipe_r6[0]);
  }
}
function DishDetailComponent_div_0_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DishDetailComponent_div_0_ul_16_li_1_Template, 3, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.dish == null ? null : ctx_r1.dish.recipeURL);
  }
}
function DishDetailComponent_div_0_div_17_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max 30 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DishDetailComponent_div_0_div_17_div_8_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DishDetailComponent_div_0_div_17_div_8_div_2_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.getForm["name"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.getForm["name"].errors["maxlength"]);
  }
}
function DishDetailComponent_div_0_div_17_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DishDetailComponent_div_0_div_17_div_10_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.getForm["color"].errors["maxlength"]);
  }
}
function DishDetailComponent_div_0_div_17_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DishDetailComponent_div_0_div_17_div_15_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.getForm["flavor"].errors["maxlength"]);
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Recipe name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DishDetailComponent_div_0_div_17_ng_container_17_div_8_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DishDetailComponent_div_0_div_17_ng_container_17_div_8_div_2_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipeForm_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = recipeForm_r15.get("recipeName")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = recipeForm_r15.get("recipeName")) == null ? null : tmp_1_0.hasError("maxlength"));
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Link is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_div_17_ng_container_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DishDetailComponent_div_0_div_17_ng_container_17_div_9_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DishDetailComponent_div_0_div_17_ng_container_17_div_9_div_2_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DishDetailComponent_div_0_div_17_ng_container_17_div_9_div_3_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipeForm_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = recipeForm_r15.get("link")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = recipeForm_r15.get("link")) == null ? null : tmp_1_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = recipeForm_r15.get("link")) == null ? null : tmp_2_0.hasError("realURL"));
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function DishDetailComponent_div_0_div_17_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 34)(2, "li", 35)(3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 37)(5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_div_17_ng_container_17_Template_span_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const i_r16 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.removeRecipe(i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DishDetailComponent_div_0_div_17_ng_container_17_div_8_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DishDetailComponent_div_0_div_17_ng_container_17_div_9_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const recipeForm_r15 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r10.toFormGroup(recipeForm_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r10.submitted && ((tmp_1_0 = recipeForm_r15.get("recipeName")) == null ? null : tmp_1_0.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx_r10.submitted && ((tmp_2_0 = recipeForm_r15.get("link")) == null ? null : tmp_2_0.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.submitted && ((tmp_3_0 = recipeForm_r15.get("recipeName")) == null ? null : tmp_3_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.submitted && ((tmp_4_0 = recipeForm_r15.get("link")) == null ? null : tmp_4_0.errors));
  }
}
function DishDetailComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 23)(2, "div", 24)(3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function DishDetailComponent_div_0_div_17_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.toggleDynamicClass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DishDetailComponent_div_0_div_17_div_8_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function DishDetailComponent_div_0_div_17_Template_input_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.toggleDynamicClass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DishDetailComponent_div_0_div_17_div_10_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 24)(12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Flavor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function DishDetailComponent_div_0_div_17_Template_input_input_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.toggleDynamicClass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DishDetailComponent_div_0_div_17_div_15_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DishDetailComponent_div_0_div_17_ng_container_17_Template, 10, 9, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 31)(19, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_div_17_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.addRecipe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Add a recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx_r2.submitted && ctx_r2.getForm["name"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.getForm["name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r2.submitted && ctx_r2.getForm["color"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.getForm["color"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx_r2.submitted && ctx_r2.getForm["flavor"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.getForm["flavor"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getRecipes.controls);
  }
}
function DishDetailComponent_div_0_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DishDetailComponent_div_0_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r35.onSubmit();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.toggleDynamicClass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.isWarningClass ? "btn-warning" : "btn-primary");
  }
}
function DishDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "div", 6)(13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "View Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DishDetailComponent_div_0_ul_16_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DishDetailComponent_div_0_div_17_Template, 21, 14, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DishDetailComponent_div_0_button_21_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DishDetailComponent_div_0_button_22_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.upvoteIt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishDetailComponent_div_0_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r40.downvoteIt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("~~~", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r0.dish.name), "~~~");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.dish.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.dish.flavor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.dish.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ratings: ", ctx_r0.dish.rating, "");
  }
}
class DishDetailComponent {
  constructor(route, dishService, location, fb) {
    this.route = route;
    this.dishService = dishService;
    this.location = location;
    this.fb = fb;
    this.editMode = false;
    this.isWarningClass = false;
    this.submitted = false;
    this.toFormGroup = form => form;
  }
  //FORM GROUP STUFF----------------------------------------------------
  get getForm() {
    return this.editForm.controls;
  }
  get getRecipes() {
    return this.editForm?.controls["recipes"];
  }
  addRecipe() {
    const recipeForm = this.fb.group({
      recipeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]],
      link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200), (0,_add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_0__.createURLValidator)()]]
    });
    this.getRecipes.push(recipeForm);
  }
  removeRecipe(location) {
    this.getRecipes.removeAt(location);
  }
  //FORM GROUP ABOVE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ngOnInit() {
    this.getDish();
  }
  getDish() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dishService.getDish(id).subscribe(dish => this.dish = dish);
  }
  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.save(true);
  }
  save(subscribeBool) {
    if (this.dish) {
      this.setSaveValues();
      if (subscribeBool) {
        this.dishService.updateDish(this.dish).subscribe(() => {
          this.edit();
          this.isWarningClass = false;
        });
      } else {
        this.dishService.updateDish(this.dish).subscribe(() => console.log("Updated <false>"));
      }
      this.submitted = false;
    }
  }
  setSaveValues() {
    if (this.dish) {
      this.dish.name = this.editForm.value.name;
      this.dish.color = this.editForm.value.color;
      this.dish.flavor = this.editForm.value.flavor;
      let tempArray = [];
      this.editForm.value.recipes.forEach(element => {
        tempArray.push([element.recipeName, element.link]);
      });
      this.dish.recipeURL = tempArray;
    }
  }
  goBack() {
    this.location.back();
  }
  edit() {
    if (this.editMode) {
      this.editMode = false;
      return;
    }
    this.editMode = true;
    this.setEditFormData();
  }
  setEditFormData() {
    this.editForm = this.fb.group({
      name: [`${this.dish?.name}`, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]],
      color: [`${this.dish?.color}`, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10)],
      flavor: [`${this.dish?.flavor}`, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)],
      recipes: this.fb.array([])
    });
    this.dish?.recipeURL.forEach(element => {
      const recipeForm = this.fb.group({
        recipeName: [`${element[0]}`, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]],
        link: [`${element[1]}`, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200), (0,_add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_0__.createURLValidator)()]]
      });
      this.getRecipes.push(recipeForm);
    });
  }
  toggleDynamicClass() {
    if (this.isWarningClass == true) return;
    this.isWarningClass = !this.isWarningClass;
  }
  upvoteIt() {
    if (this.dish) this.dish.rating += 1;
    this.save(false);
  }
  downvoteIt() {
    if (this.dish && this.dish.rating != 0) this.dish.rating -= 1;
    this.save(false);
  }
}
DishDetailComponent.ɵfac = function DishDetailComponent_Factory(t) {
  return new (t || DishDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dish_service__WEBPACK_IMPORTED_MODULE_1__.DishService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
DishDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DishDetailComponent,
  selectors: [["app-dish-detail"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "h2", "text-danger", "d-flex", "justify-content-center"], [1, "h2", "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "py-3"], ["height", "500", "width", "500", 1, "rounded", "img-fluid", 3, "src"], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle", "mb-2"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], [1, "btn-group", "mt-2"], ["type", "button", 1, "btn", "btn-dark", "btn-lg", 3, "click"], ["class", "btn btn-dark btn-lg", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-lg", "type", "button", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["src", "../assets/upvote.png", "width", "20", "height", "20"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["src", "../assets/downvote.png", "width", "20", "height", "20"], [1, "m-1"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], [1, "dropdown-item", 3, "href"], [3, "formGroup"], [1, "input-group", "mb-3"], [1, "input-group-text"], ["type", "text", "name", "dish-name", "formControlName", "name", "placeholder", "Dish name", 1, "form-control", 3, "ngClass", "input"], ["class", "invalid-feedback", 4, "ngIf"], ["name", "dish-color", "formControlName", "color", "placeholder", "Dish color", 1, "form-control", 3, "ngClass", "input"], ["name", "dish-flavor", "formControlName", "flavor", "placeholder", "Dish flavor", 1, "form-control", 3, "ngClass", "input"], [4, "ngFor", "ngForOf"], [1, "col", "text-end"], ["type", "button", 1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "invalid-feedback"], [1, "list-group"], [1, "list-group-item"], [1, "input-group", 3, "formGroup"], ["type", "text", "placeholder", "Recipe name...", "formControlName", "recipeName", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "Link...", "formControlName", "link", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-lg", 3, "ngClass", "click"]],
  template: function DishDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DishDetailComponent_div_0_Template, 29, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dish);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__.BsDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlzaC1kZXRhaWwvZGlzaC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QksiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzXG5sYWJlbCB7XG4gICAgY29sb3I6ICM0MzU5NjA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG4gIH1cbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGN1cnNvcjogYXV0bztcbiAgfSAqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1189:
/*!******************************************************!*\
  !*** ./src/app/dish-search/dish-search.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DishSearchComponent: () => (/* binding */ DishSearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dish.service */ 6695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);






function DishSearchComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dish_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", dish_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dish_r2.name, " ");
  }
}
class DishSearchComponent {
  constructor(dishService) {
    this.dishService = dishService;
    this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  // Push a search term into the observable stream.
  search(term) {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.dishes$ = this.searchTerms.pipe(
    // wait 300ms after each keystroke before considering the term
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(300),
    // ignore new term if same as previous term
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(),
    // switch to new search observable each time the term changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(term => this.dishService.searchDishes(term)));
  }
}
DishSearchComponent.ɵfac = function DishSearchComponent_Factory(t) {
  return new (t || DishSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dish_service__WEBPACK_IMPORTED_MODULE_0__.DishService));
};
DishSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DishSearchComponent,
  selectors: [["app-dish-search"]],
  decls: 12,
  vars: 3,
  consts: [["id", "search-component", 1, "d-flex", "justify-content-center"], ["for", "search-box", 1, "h3", "m-3"], [1, "input-group", "mb-3"], [1, "input-group-text"], ["type", "text", "placeholder", "Dish...", "id", "search-box", 1, "form-control", 3, "input"], ["searchBox", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [3, "routerLink"]],
  template: function DishSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dish Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function DishSearchComponent_Template_input_input_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.search(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DishSearchComponent_li_10_Template, 3, 2, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 1, ctx.dishes$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlzaC1zZWFyY2gvZGlzaC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThDSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXNcblxubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIFxuICB9XG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzM2Njk5IGF1dG8gMXB4O1xuICB9XG4gIFxuICBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNUE2MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIHVsLnNlYXJjaC1yZXN1bHQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9ICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6695:
/*!*********************************!*\
  !*** ./src/app/dish.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DishService: () => (/* binding */ DishService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.service */ 9594);






class DishService {
  constructor(http, messageService) {
    this.http = http;
    this.messageService = messageService;
    this.dishesUrl = 'api/dishes'; // URL to web api
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  /** GET heroes from the server */
  getDishes() {
    return this.http.get(this.dishesUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(_ => this.log('fetched dishes')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getDishes', [])));
  }
  getDishesRatingOrder() {
    return this.http.get(this.dishesUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(dishes => {
      dishes.sort((a, b) => b.rating - a.rating);
      return dishes;
    }));
  }
  /** GET hero by id. Will 404 if id not found */
  getDish(id) {
    const url = `${this.dishesUrl}/${id}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(_ => this.log(`fetched dish id=${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError(`getDish id=${id}`)));
  }
  /** Log a HeroService message with the MessageService */
  log(message) {
    this.messageService.add(`DishService: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError(operation = 'operation', result) {
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
    };
  }
  /** PUT: update the hero on the server */
  updateDish(dish) {
    return this.http.put(this.dishesUrl, dish, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(_ => this.log(`updated dish=${dish.name}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('updateDish')));
  }
  /** POST: add a new hero to the server */
  addDish(newDish) {
    return this.http.post(this.dishesUrl, newDish, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(newDish => this.log(`added dish w/ name=${newDish.name}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('addDish')));
  }
  /** DELETE: delete the hero from the server */
  deleteDish(id) {
    const url = `${this.dishesUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(_ => this.log(`deleted dish id=${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('deleteDish')));
  }
  /* GET heroes whose name contains search term */
  searchDishes(term) {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    }
    return this.http.get(`${this.dishesUrl}/?name=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(x => x.length ? this.log(`found dishes matching "${term}"`) : this.log(`no dishes matching "${term}"`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('searchDishes', [])));
  }
}
DishService.ɵfac = function DishService_Factory(t) {
  return new (t || DishService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
};
DishService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: DishService,
  factory: DishService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9653:
/*!********************************************!*\
  !*** ./src/app/dishes/dishes.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DishesComponent: () => (/* binding */ DishesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dish.service */ 6695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function DishesComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6)(1, "a", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DishesComponent_li_7_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const dish_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.delete(dish_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dish_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", dish_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rating ", dish_r1.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ID:", dish_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", dish_r1.name, " ");
  }
}
class DishesComponent {
  constructor(dishService) {
    this.dishService = dishService;
    this.dishes = [];
  }
  ngOnInit() {
    this.getDishes();
  }
  getDishes() {
    this.dishService.getDishesRatingOrder().subscribe(dishes => this.dishes = dishes);
  }
  delete(dish) {
    this.dishes = this.dishes.filter(h => h !== dish);
    this.dishService.deleteDish(dish.id).subscribe();
  }
}
DishesComponent.ɵfac = function DishesComponent_Factory(t) {
  return new (t || DishesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dish_service__WEBPACK_IMPORTED_MODULE_0__.DishService));
};
DishesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DishesComponent,
  selectors: [["app-dishes"]],
  decls: 8,
  vars: 1,
  consts: [[1, "btn-group"], ["type", "button", 1, "btn", "btn-dark", "btn-lg"], ["type", "button", "title", "add dish", "routerLink", "/add-dish", 1, "btn", "btn-success", "btn-lg"], [1, "m-3"], [1, "list-group-flush"], ["class", "list-group-item btn-group mt-2", 4, "ngFor", "ngForOf"], [1, "list-group-item", "btn-group", "mt-2"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "badge", "text-bg-warning"], [1, "badge"], ["type", "button", "title", "delete dish", 1, "btn", "btn-danger", "btn-md", 3, "click"]],
  template: function DishesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Dishes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DishesComponent_li_7_Template, 9, 4, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dishes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 9719:
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class InMemoryDataService {
  createDb() {
    const dishes = [{
      id: 1,
      name: 'Joojeh Kebab',
      color: 'Yellow',
      flavor: 'Like Chicken',
      img: '../assets/joojeh-kebab.jpeg',
      recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']],
      rating: 0
    }, {
      id: 2,
      name: 'Kebab Koobideh',
      color: 'Brown',
      flavor: 'Like Cow',
      img: '../assets/kebab-koobideh.jpeg',
      recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']],
      rating: 0
    }, {
      id: 3,
      name: 'Khoreshteh Karafs',
      color: 'Green',
      flavor: 'Like Celery',
      img: '../assets/khoresh-karafs.jpeg',
      recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']],
      rating: 0
    }, {
      id: 4,
      name: 'Ob Goosht',
      color: 'Orange',
      flavor: 'Like water and meat',
      img: '../assets/ob-goosht.jpeg',
      recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']],
      rating: 0
    }, {
      id: 5,
      name: 'Tahcheen',
      color: 'Yellow',
      flavor: 'Like rice and chicken',
      img: '../assets/tahcheen.webp',
      recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']],
      rating: 0
    }];
    return {
      dishes
    };
  }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
  return new (t || InMemoryDataService)();
};
InMemoryDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InMemoryDataService,
  factory: InMemoryDataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9594:
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MessageService {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)();
};
MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MessageService,
  factory: MessageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8853:
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesComponent: () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message.service */ 9594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function MessagesComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r2, " ");
  }
}
function MessagesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.messageService.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Clear messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
  }
}
class MessagesComponent {
  constructor(messageService) {
    this.messageService = messageService;
  }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
  return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
};
MessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MessagesComponent,
  selectors: [["app-messages"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "py-2"], ["type", "button", 1, "btn", "btn-danger", "btn-md", 3, "click"], [4, "ngFor", "ngForOf"]],
  template: function MessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6576), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map