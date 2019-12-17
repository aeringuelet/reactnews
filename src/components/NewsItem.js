import React from 'react';

const NewsItem = ({item}) => {
    const {urlToImage, description, title, url, source} = item;

    return ( 
    <div className="col s12 m6 l4">
        <div className="card">
            <div className="card-image">
                <img src={urlToImage} alt={title} />
            </div>

            <div className="card-content">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>

            <div className="card-action">
                <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                    View from source
                </a>
            </div>
        </div>
    </div> 
    );
}
 
export default NewsItem;