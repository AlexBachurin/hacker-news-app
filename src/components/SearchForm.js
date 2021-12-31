import React from 'react'
import { useGlobalContext } from '../context'
export const SearchForm = () => {
    const { searchTerm, handleChange } = useGlobalContext();
    return (
        <form className='search-form'>
            <h2>Search Hacker news</h2>
            <input onChange={(e) => handleChange(e.target.value)} type="text" className='form-input' value={searchTerm} />
        </form>
    )
}
