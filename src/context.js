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
    //fetch every time search term changes or page changes
    useEffect(() => {
        const url = `https://hn.algolia.com/api/v1/search?query=${state.searchTerm}&page=${state.page}`
        fetchNews(url);

    }, [state.searchTerm, state.page])

    /// *** REMOVE SINGLE NEWS  *** ///
    const removeSingleNews = (id) => {
        dispatch({ type: 'REMOVE_SINGLE_NEWS', payload: { id } })
    }
    // *** Input Change *** ///
    const handleChange = (value) => {
        dispatch({ type: 'CHANGE_SEARCH_TERM', payload: value })
    }
    //**  PREV AND NEXT PAGE **/
    const changePage = (type) => {
        dispatch({ type: 'CHANGE_PAGE', payload: type })
    }

    return <AppContext.Provider value={{
        ...state,
        removeSingleNews,
        handleChange,
        changePage
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };