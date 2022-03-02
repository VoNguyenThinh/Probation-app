// import { SET_CLICKED } from './constants'
// import { ADD_LIST_FORMS } from './constants'
// import { SET_ACTIVE_BTN } from './constants'
// import { SET_PROCESS } from './constants'

// import { v4 as uuidv4 } from 'uuid';

// const inittialState = {
//     listForms: [],
//     listOptions: [],
//     process: 0, //inUse
// }
// function Reducer(state, action) {
//     switch (action.type) {

//         case ADD_LIST_FORMS: {
//             let newArray = [...state.listForms]
//             newArray.push(
//                 {
//                     title: action.payload.title,
//                     id: uuidv4()
//                 }
//             )
//             return {
//                 ...state,
//                 listForms: newArray
//             }
//         }
//         case SET_ACTIVE_BTN: {
//             return {
//                 ...state,
//                 btnid: action.payload
//             }
//         }
//         case SET_PROCESS: {
//             return {
//                 ...state,
//                 process: action.payload
//             }
//         }

//     }
// }

// export { inittialState }

// export default Reducer