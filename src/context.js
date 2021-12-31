import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    loading: false,
    news: [],
    pages: 0,
    page: 0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return <AppContext.Provider value={{

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };