import React from 'react';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div style={{ backgroundImage: `url(${imageUrl})`}} className='background-image' />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOPS NOW</span>
        </div>
    </div>
)

export default MenuItem; 