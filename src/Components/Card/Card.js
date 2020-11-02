import React from 'react';
import './Card.styles.css';

const Card = (props) => (
    <div >
        {
            props.cards && props.cards.Response !== 'False' ? <div className="card">
                <img className="poster" src={props.cards.Poster} alt="poster" />
                <div className="card-details">
                    <h2 className="heading">{props.cards.Title}</h2>
                    <p className="parag">{props.cards.Plot}</p>
                    <span className="release">Released: {props.cards.Released}</span>
                    <button className="favBtn" onClick={props.favHandler}>Favourite</button>
                </div>
            </div> : <h4>{props.cards.Error}</h4>
        }
    </div>
)

export default Card;