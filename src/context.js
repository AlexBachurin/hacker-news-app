import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    loading: false,
    news: [],
    pages: 0,
    page: 0,
    searchTerm: 'react'
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //*** FETCH NEWS ***//

    const fetchNews = async (url) => {
        dispatch({ type: 'SET_LOADING' })
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({ type: 'SET_NEWS', payload: { hits: data.hits, nbPages: data.nbPages } })
    }
    useEffect(() => {
        const url = `http://hn.algolia.com/api/v1/search?query=${state.searchTerm}&page=${state.page}`
        fetchNews(url);

    }, [])

    return <AppContext.Provider value={{
        ...state,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };