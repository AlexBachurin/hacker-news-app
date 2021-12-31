import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
const News = () => {
    const { loading } = useGlobalContext();
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            News component
        </div>
    )
}

export default News
