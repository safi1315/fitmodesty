import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className = 'cards'>
        <h1>
            Check out these amazing coaches
        </h1>
        <div className = 'cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards