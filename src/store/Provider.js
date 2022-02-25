import { useReducer } from "react";
import Context from "./Context";
import reducer, { inittialState } from './Reducer'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, inittialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;