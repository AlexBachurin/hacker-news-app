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
    return state
}
export default reducer