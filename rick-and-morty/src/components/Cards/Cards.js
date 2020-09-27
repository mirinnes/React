import React from 'react';
import './Cards.scss';

const Cards = ({img, name, species, status, location}) => {
    return(
        <section className="card">
            <section className="card-img">
                {/* {children}  */}
                <img src={img} alt="rick and morty" />
            </section>
            <article className="card-article">
                <h4 className="card-article-name">{name}</h4>
                <div className="card-article-species-and-status">
                    <div className="card-article-species">
                        <h5> Species: </h5>
                        <p>{species}</p>
                    </div>
                    <div className="card-article-status"> 
                        <h5>Status:</h5>
                        <p>{status}</p>
                    </div>
                </div>
                <div className="card-article-location"> 
                    <h5>Location:</h5>
                    <p>{location}</p>
                </div>
            </article>
        </section>
    )
}

export default Cards;