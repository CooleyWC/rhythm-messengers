import React from 'react'

const Card = ({name, title, email, phoneNumber}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{title}</p>
      {email.length > 0 && <p>{email}</p>}
      <p>Phone: {phoneNumber}</p>
    </div>
  )
}

export default Card
