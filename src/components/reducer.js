export const initialState = {
    basket: [],
    user : null
}

const reducer=(state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            //logic for removing from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
            if (index>=0){
                //item exists
                newBasket.splice(index, 1);
            }
            else{
                console.log("cant");
            }
            return {...state, basket: newBasket}
             
        default:
            return(state);
    }
}

export default reducer;