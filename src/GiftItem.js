import React from 'react'

export const GiftItem = ({imgUrl,title}) => {
    return (
        <div>
            <h6>{title}</h6>
            <img src={imgUrl} alt={title} />
        </div>
    )
}
