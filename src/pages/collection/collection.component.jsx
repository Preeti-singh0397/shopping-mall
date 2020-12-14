import React from 'react';
import "./collection.style.scss";
import CollectionItems from "../../components/collection-item/collection-item.component";
import {selectShopCollection} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";




const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
        <div className="collection-component">
            <h2>collection Page</h2>
        </div>

    )
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectShopCollection(ownProps.match.params.collectionId)(state)
  })

export default connect(mapStateToProps)(CollectionPage);