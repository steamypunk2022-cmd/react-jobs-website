import React from 'react'

const Card = ({children, bg = 'bg-gray-100'}) => {
    // destructured props to get children, children is a special prop that is used to pass the content of the component, in this case we are passing the content of the card as children, and we can access it using {children}
  return (
   <div className={`${bg} p-6 rounded-lg shadow-md`}>
    {children}
   </div> 
  )
}

export default Card