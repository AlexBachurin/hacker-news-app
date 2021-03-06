const reducer = (state, action) => {
    if (action.type === 'SET_LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'SET_NEWS') {
        return { ...state, news: action.payload.hits, pages: action.payload.nbPages, loading: false }
    }
    if (action.type === 'REMOVE_SINGLE_NEWS') {
        //filter state news array and remove item with clicked id
        let tempArr = state.news.filter(item => item.objectID !== action.payload.id)
        return { ...state, news: tempArr }
    }
    if (action.type === 'CHANGE_SEARCH_TERM') {
        //dont forget to reset page to 0
        console.log(action.payload)
        return { ...state, searchTerm: action.payload, page: 0 }
    }
    if (action.type === 'CHANGE_PAGE') {
        if (action.payload === 'prev') {
            let tempPage = state.page - 1;
            //check if we go out of bounds
            if (tempPage < 0) {
                tempPage = state.pages - 1;
            }
            return { ...state, page: tempPage }
        }
        if (action.payload === 'next') {
            let tempPage = state.page + 1;
            if (tempPage > state.pages - 1) {
                tempPage = 0;
            }
            return { ...state, page: tempPage }
        }
    }
    return state
}
export default reducer