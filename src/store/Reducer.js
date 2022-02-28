import { SET_CLICKED, SET_TYPE } from './constants'
import { ADD_LIST_FORMS } from './constants'
import { SET_ACTIVE_FORM_ID } from './constants'
import { ADD_LIST_OPTION } from './constants'
import { SET_ACTIVE_BTN } from './constants'
import { SET_PROCESS } from './constants'
import { SET_ACTIVE_OPTION } from './constants'
import { SET_FORM_TITLE } from './constants'
import { SET_ALL_DATA } from './constants'

import { v4 as uuidv4 } from 'uuid';

const inittialState = {
    listForms: [],
    listOptions: [],
    allData: [],
    typeOfProperty: {
        'TEXT': ['type', 'label', 'name', 'required'],
        'SELECT': ['type', 'label', 'name', 'select'],
        'RADIO': ['type', 'label', 'name', 'select-multiple', 'required',],
        'DATE PICKER': ['type', 'label', 'name', 'required'],
    },

    activeFormId: '', //inUSe
    activeOption: '',//inUse
    activeType: '',
    btnid: '',
    process: 0, //inUse
    clicked: false, //inUse
    activeFormTitle: '', //inUse



}
function Reducer(state, action) {
    switch (action.type) {
        case SET_CLICKED:
            return {
                ...state,
                clicked: action.payload
            }
        case ADD_LIST_FORMS: {
            let newArray = [...state.listForms]
            newArray.push(
                {
                    title: action.payload.title,
                    id: uuidv4()
                }
            )
            return {
                ...state,
                listForms: newArray
            }
        }
        case SET_ACTIVE_FORM_ID: {
            return {
                ...state,
                activeFormId: action.payload
            }
        }
        case ADD_LIST_OPTION: {
            let newArray = [...state.listOptions]
            newArray.push(
                {
                    id: uuidv4(),
                    type: action.payload,
                    formId: state.activeFormId
                }
            )
            return {
                ...state,
                listOptions: newArray
            }
        }
        case SET_ACTIVE_BTN: {
            return {
                ...state,
                btnid: action.payload
            }
        }
        case SET_PROCESS: {
            return {
                ...state,
                process: action.payload
            }
        }
        case SET_ACTIVE_OPTION: {
            return {
                ...state,
                activeOption: action.payload
            }
        }
        case SET_TYPE: {
            return {
                ...state,
                activeType: action.payload
            }
        }
        case SET_FORM_TITLE: {
            return {
                ...state,
                activeFormTitle: action.payload
            }
        }
        case SET_ALL_DATA: {
            return {
                ...state,
                allData: action.payload
            }
        }
    }
}

export { inittialState }
export default Reducer