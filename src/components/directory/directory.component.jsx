import React from "react";
import MenuItems from "../menu-item/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect"


const Directory = ({sections}) => (
    <div className="directory-menu" >
        {
            sections.map(item => (
                <MenuItems
                    key={item.id}
                    title={item.title.toUpperCase()}
                    imageUrl={item.imageUrl}
                    size={item.size}
                    link={item.linkUrl}
                />
            ))
        }
    </div>
)


const MapPropsToState = createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(MapPropsToState)(Directory);