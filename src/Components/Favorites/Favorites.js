import React from 'react';
import Card from '../Card/Card';

const Favorites = (props) => {
    return(
        <div className="header">
          <Card cards={props.fav} onClick={props.favHandler} />
        </div>
    )
}

export default Favorites;