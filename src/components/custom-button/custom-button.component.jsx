import React from 'react'
import "./custom-button.style.scss"

function CustomButton({children,isGoggleSignIn,inverted,...otherProps}) {
    return (
        <button className={`${inverted?"inverted":""} ${isGoggleSignIn?"goggle-sign-in":""} custom-button`} {...otherProps}>
          {children}
        </button>
    )
}

export default  CustomButton;