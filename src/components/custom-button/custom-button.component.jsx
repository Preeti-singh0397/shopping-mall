import React from 'react'
import "./custom-button.style.scss"

function CustomButton({children,isGoggleSignIn,...otherProps}) {
    return (
        <button className={`${isGoggleSignIn?"goggle-sign-in":""} custom-button`} {...otherProps}>
          {children}
        </button>
    )
}

export default  CustomButton;