import React from 'react'
import "./collection-items.style.scss"

function collectionItem({ id, name, price, imgUrl }) {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

        </div>
    )
}

export default collectionItem;