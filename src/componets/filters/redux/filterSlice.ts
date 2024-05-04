import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        class: [],
        level: [],
        nation: [],
        isActiveBtnFilter: false
    },
    reducers: {
        setIsActiveBtn(state) {
            state.isActiveBtnFilter = Boolean(
                state.class.length || state.level.length || state.nation.length
            );
        },

        setFilterData(state, payload) {
            const { typeFilter, data} = payload.payload
            if(state[typeFilter].includes(data)){
                state[typeFilter] = state[typeFilter].filter(el => el !== data)
            } else {
                state[typeFilter] = [...state[typeFilter], data] 
            }
        },


    },
})


export const { setIsActiveBtn, setFilterData } = filterSlice.actions

export default filterSlice.reducer