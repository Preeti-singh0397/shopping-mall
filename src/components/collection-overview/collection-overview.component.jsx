import React from 'react';
import "./collection-overview.style.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import { selectCollectionForPreview } from "../../redux/shop/shop.selector"


const CollectionOverview=({collections})=> (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollection }) => (
            <CollectionPreview key={id} {...otherCollection} />
        ))
        }
        </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);