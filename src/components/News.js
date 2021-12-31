import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
const News = () => {
    const { loading, news } = useGlobalContext();
    if (loading) {
        return <Loading />
    }
    return (
        <section className='stories'>
            {news.map(item => {
                const { objectID, author, num_comments, points, title, url } = item;
                return (
                    <article key={objectID} className='story'>
                        <h4 className="title">
                            {title}
                        </h4>
                        <p className="info">
                            {points} points by <span>{author} |</span> {num_comments} comments
                        </p>
                        <div>
                            <a href={url} className='read-link' target='_blank' rel='noopener noreferrer'>read more</a>
                            <button className='remove-btn'>remove</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default News
