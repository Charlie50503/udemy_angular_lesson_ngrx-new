import { Ingredient } from './../../shared/ingredient.model';
import { Action, createAction, props } from "@ngrx/store";

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

export const addIngredient = createAction(ADD_INGREDIENT,props<{data:Ingredient}>());


export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) { }

}
export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]) { }

}
export class UpdateIngredients implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: { index: number, newIngredient: Ingredient }) { }

}
export class DeleteIngredients implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public payload: number) { }

}

export type ShoppingListActions =
  AddIngredient |
  AddIngredients |
  UpdateIngredients |
  DeleteIngredients
