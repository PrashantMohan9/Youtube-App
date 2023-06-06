import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        updateCacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

export const { updateCacheResults } = searchSlice.actions;

export default searchSlice.reducer;



  /**
   *  searchCache = {
   *     "i": ["iphone 11", "iphone 14"]
   *     "ip": ["iphone 11", "iphone 14"] 
   *     "iph": ["iphone 11", "iphone 14"]
   *  }
   * 
   *  searchQuery = iph
   */
