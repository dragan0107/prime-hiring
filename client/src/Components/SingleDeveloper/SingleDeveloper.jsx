import React from 'react';
import './SingleDeveloper.css';

const SingleDeveloper = () => {
    return (
        <div className="single-dev-wrapper">
            <section className="img-section">
                <img
                    src="https://res.cloudinary.com/dripcloud/image/upload/v1642728187/test_upload_react/mxi9bjdad7olqr0uxw4v.jpg"
                    alt=""
                />
            </section>
            <section className="info-left"></section>
            <section className="info-right"></section>
        </div>
    );
};

export default SingleDeveloper;
