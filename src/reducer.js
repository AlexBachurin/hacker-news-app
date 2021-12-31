const reducer = (state, action) => {
    if (action.type === 'SET_LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'SET_NEWS') {
        return { ...state, news: action.payload.hits, pages: action.payload.nbPages, loading: false }
    }
    return state
}
export default reducer