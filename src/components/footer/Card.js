import { Typography } from '@mui/material'
import React from 'react'

const Card = ({name, title, email, phoneNumber}) => {
  return (
    <div>
      <Typography sx={{fontSize: '1rem'}}>{name}</Typography>
      <Typography sx={{fontSize: '0.9rem', fontWeight: 350}}>{title}</Typography>
      <Typography sx={{fontSize: '0.9rem', fontWeight: 350}}>{email}</Typography>
      {phoneNumber.length > 0 && <Typography sx={{fontSize: '0.9rem', fontWeight: 350}}>{phoneNumber}</Typography>}
    </div>
  )
}

export default Card
