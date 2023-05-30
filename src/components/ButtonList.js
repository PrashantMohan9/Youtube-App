import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Soccer", "Cricket", "Cooking", "Live", "Gaming", "Soccer", "Cricket", "Cooking"];

const ButtonList = () => {
  return (
    <div className='flex'>
        {list.map((item, index) => (
            <Button key={index} name={item} />
        ))}
    </div>
  )
}

export default ButtonList