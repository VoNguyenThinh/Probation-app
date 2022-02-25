import { SET_CLICKED } from './constants'
import { ADD_LIST_FORMS } from './constants'
import { SET_ACTIVE_FORM_ID } from './constants'
import { ADD_LIST_OPTION } from './constants'
import { SET_ACTIVE_BTN } from './constants'
import { SET_ACTIVE_OPTION } from './constants'
import { SET_PROCESS } from './constants'
import { SET_TYPE } from './constants'
import { SET_FORM_TITLE } from './constants'
import { SET_ALL_DATA } from './constants'


export const setClicked = payload => ({
    type: SET_CLICKED,
    payload
})

export const addListForms = payload => ({
    type: ADD_LIST_FORMS,
    payload
})

export const setFormId = payload => ({
    type: SET_ACTIVE_FORM_ID,
    payload
})

export const addListOptions = payload => ({
    type: ADD_LIST_OPTION,
    payload
})

export const setActiveBtn = payload => ({
    type: SET_ACTIVE_BTN,
    payload
})

export const setActiveOption = payload => ({
    type: SET_ACTIVE_OPTION,
    payload
})

export const setProcess = payload => ({
    type: SET_PROCESS,
    payload
})

export const setType = payload => ({
    type: SET_TYPE,
    payload
})

export const setFormTile = payload => ({
    type: SET_FORM_TITLE,
    payload
})

export const setAllData = payload => ({
    type: SET_ALL_DATA,
    payload
}) 