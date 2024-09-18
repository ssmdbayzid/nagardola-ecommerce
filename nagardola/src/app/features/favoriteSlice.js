import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteItems : localStorage.getItem("favoriteItem") ? JSON.parse(localStorage.getItem("favoriteItem")) : []
}

const favoriteSlice = createSlice({
    name: "favotite", 
    initialState,
    reducers: {
        addToFavorite(state, action){
            const itemIndex = state.favoriteItems.findIndex(item=> item._id === action.payload._id);
            if(itemIndex < 0 ){
                state.favoriteItems.push(action.payload);

                // Update LocalStorate
                localStorage.setItem("favoriteItem", JSON.stringify(state.favoriteItems));
            }else {
                alert("Already added to favotite")
            }
        },
        removeFavItem(state, action){
            state.favoriteItems = state.favoriteItems.filter(item=> item._id !== action.payload._id);

            // Update LocalStorate
            localStorage.setItem("favoriteItem", JSON.stringify(state.favoriteItems));
        },
        resetFavCart(state){
            state.favoriteItems = [];

             // Update LocalStorate
             localStorage.removeItem("favoriteItem");
        }
    }
})

const {addToFavorite, removeFavItem, resetFavCart} = favoriteSlice.actions;

export default favoriteSlice.reducer;