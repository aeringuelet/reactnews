import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({news}) => ( 
    <div className="row">
        {news.map(item => (
            <NewsItem
                key={item.url}
                item={item}
            />
        ))}
    </div>
 );
 
export default NewsList;