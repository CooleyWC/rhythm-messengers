import { Typography } from '@mui/material'
import React from 'react'

const Card = ({name, title, email, phoneNumber}) => {
  return (
    <div>
      <Typography sx={{fontSize: {xs:'0.88rem', sm:'1rem'}, fontWeight: 700}}>{name}</Typography>
      <Typography sx={{fontSize: {xs:'0.75rem',sm:'0.95rem'}, fontWeight: 400}}>{title}</Typography>
      <Typography sx={{fontSize: {xs:'0.75rem', sm:'0.9rem'}, fontWeight: 400}}>{email}</Typography>
      {phoneNumber.length > 0 && <Typography sx={{fontSize: {xs:'0.75rem',sm:'0.9rem'}, fontWeight: 400}}>{phoneNumber}</Typography>}
    </div>
  )
}

export default Card
