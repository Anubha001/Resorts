import React from 'react'

function Banner({children,title,subtitle,price}) {
    return (
        <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        <p>{price}</p>
        {children}
            
        </div>
    )
}

export default Banner
