import { Action, createReducer, on } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions'
import {addIngredient} from './shopping-list.actions'
export interface State {
  ingredients:Ingredient[],
  editedIngredient:Ingredient,
  editedIngredientIndex:number
}

export interface AppStore {
  shoppingList:State
}

const initialState = {
  ingredients:[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient:null,
  editedIngredientIndex:-1,
}
export const reducer = createReducer(
  initialState,
  on(addIngredient,(state,{data})=>{
    console.log(data);

    return {
      ...state,
      ingredients:[...state.ingredients,data]
    }
  })
)

export function shoppingListReducer(state=initialState,action:ShoppingListActions.ShoppingListActions){
  switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients:[...state.ingredients,action.payload]
      }
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients:[...state.ingredients,...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updateIngredient = action.payload.newIngredient;
      const updatedIngredient = {
        ...ingredient,
        ...updateIngredient
      }
      const updatedIngredients = [...state.ingredients]
      updatedIngredients[action.payload.index] = updatedIngredient
      return {
        ...state,
        ingredients:updatedIngredients
      }

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients:state.ingredients.filter((ingredient,index)=>action.payload!==index)
      }

    default:
      return state;
  }
}
