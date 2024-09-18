import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalCartQty : 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex  = state.cartItems.findIndex((item)=>item._id === action.payload._id);
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQty += 1;

                // Update data store to localStorage
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
            else{
                const newCartItem = {...action.payload, cartQty: 1}
                state.cartItems.push(newCartItem);

                // Update data store to localStorage                
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        decreateCartQty(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item._id ===  action.payload._id);
            if(state.cartItems[itemIndex].cartQty > 1){
                state.cartItems[itemIndex].cartQty -= 1;

                // Update data store to localStorage
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }else{
                state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id);
                
                // Update data store to localStorage
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        removeCartItem(state, action){
            state.cartItems = state.cartItems.filter((item)=>item._id !== action.payload._id);

             // Update data store to localStorage                
             localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        resetCart(state){
            state.cartItems = [];

            // Update data store to localStorage                
            localStorage.removeItem("cartItems");
        }, 
        getTotal(state){
            state.totalCartQty = state.cartItems.reduce((sum, cartItem)=> sum += cartItem.cartQty, 0);
            state.cartTotalAmount = state.cartItems.reduce((sum, cartItem)=> sum += cartItem.discountPrice, 0);
        }
    },  
})

export const {addToCart, decreateCartQty, removeCartItem, resetCart, getTotal} = cartSlice.actions;

export default cartSlice.reducer;



