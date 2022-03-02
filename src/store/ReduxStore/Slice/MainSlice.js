import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: false,
    typeOfProperty: {
        'TEXT': ['label', 'name', 'required'],
        'SELECT': ['label', 'name', 'select', 'required'],
        'RADIO': ['label', 'name', 'select-multiple', 'required',],
        'DATE PICKER': ['label', 'name', 'required'],
    },
    initialSelectData: [
        { name: "Apple", value: "apple" },
        { name: "Banana", value: "banana" }
    ],
    activeOption: '',
    activeFormTitle: '',
    activeFormId: '',
    allData: null
}

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,

    reducers: {
        setClicked: (state, action) => {
            state.clicked = action.payload
        },
        addInitSelectData: (state, action) => {

            state.initialSelectData.push(action.payload)

        },
        setActiveOption: (state, action) => {
            state.activeOption = action.payload
        },
        setFormTile: (state, action) => {
            state.activeFormTitle = action.payload
        },
        setFormId: (state, action) => {
            state.activeFormId = action.payload
        },
        setAllData: (state, action) => {

            state.allData = (action.payload)
        }
    }
})


export const { setClicked, addInitSelectData, setActiveOption, setFormTile, setFormId, setAllData } = mainSlice.actions;

export const selectMainSlice = (state) => (state.mainSlice);

export default mainSlice.reducer