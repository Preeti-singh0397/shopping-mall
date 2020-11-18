import React, { Component } from 'react'
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from "./shop.data"

class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render() {
        const {collections}=this.state;
        return (
            <div>
                {collections.map(({id, ...otherCollection})=>(
                    <CollectionPreview key={id} {...otherCollection} />
                ))              
                }
            </div>
        )
    }
}

export default ShopPage;
