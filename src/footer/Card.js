import { Typography } from '@mui/material'
import React from 'react'


const Card = ({name, title, email, phoneNumber}) => {
  return (
    <div>
      <Typography style={{fontSize: '22px'}}>{name}</Typography>
      <Typography>{title}</Typography>
      {email.length > 0 && <Typography>{email}</Typography>}
      <Typography>Phone: {phoneNumber}</Typography>
    </div>
  )
}

export default Card
