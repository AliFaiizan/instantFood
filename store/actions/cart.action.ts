
export const ADD_TO_CART='ADD_TO_CART';
export const DELETE_FROM_CART='DELETE_FROM_CART';


export const addToCart=(item:any,checkboxValue:any) => {
    return { type: ADD_TO_CART, item, checkboxValue };
 }

export const deleteFromCart = (item: any, checkboxValue:any) => {
  return { type: DELETE_FROM_CART, item, checkboxValue };
};