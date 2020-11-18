import React from 'react'
import ItemCollection from '../collection-item/collection-item.component';
import "./preview-collection.style.scss"

const previewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <ItemCollection id={item.id} name={item.name} price={item.price} imgUrl={item.imageUrl} />
                    ))
                }
            </div>

        </div>
    )
}

export default previewCollection;