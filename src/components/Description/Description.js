import React from 'react';
import { Link } from 'react-router-dom';
import './Description.css'

const Description = (props) => {
    const tourObj = props.location.state
    //For restricting directly access the page with routing
    if (tourObj !== undefined) {
        return (
            <div className="blog-container blog-grid">
                <Link className="blog-homeLink" to="/">Go to Home</Link>
                <div className="tour-card blog-card">
                    <img src={tourObj.image} alt={tourObj.name} />
                    <div className="blog-price">
                        <h4 style={{ marginBottom: 0 }}>{tourObj.name}</h4>
                        <h4 className="tour-price">${tourObj.price}</h4>
                    </div>
                    <p className="blog-description">{tourObj.info}</p>
                </div>
                <Link className="blog-homeLink" to="/">Go to Home</Link>

            </div>
        )
    }
    else {
        return (
            <h1>Oops! 404,Please try later</h1>
        )
    }
}

export default Description