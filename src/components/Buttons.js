import React from 'react'
import { useGlobalContext } from '../context'
const Buttons = () => {
    //get current page and total pages
    const { page, pages, changePage, loading } = useGlobalContext();
    return (
        <div className='btn-container'>
            {/* also disable button every time we loading!!! for better user experience, we will use loading from state to manipulate disabled state */}
            <button disabled={loading} onClick={() => changePage('prev')}>prev</button>
            <p>{page + 1} of {pages}</p>
            <button disabled={loading} onClick={() => changePage('next')}>next</button>
        </div>
    )
}

export default Buttons
