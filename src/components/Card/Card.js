import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ tours, removeTour }) => {
    return (
        <div>
            <h1 className="title">Our Tours</h1>
            <div className="underline"></div>
            <div className="card-grid container">
                {
                    tours.map((item) => {
                        return (
                            <div className="tour-card" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="price">
                                    <h4 style={{ marginBottom: 0 }}>{item.name}</h4>
                                    <h4 className="tour-price">${item.price}</h4>
                                </div>
                                <p className="s-description">
                                    {item.info.substring(0, 50)}...
                                <Link className="read-more" to={item.id}>Read More</Link>
                                </p>
                                <button className="delete-btn" onClick={() => removeTour(item.id)}>
                                    Not Interested
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card;