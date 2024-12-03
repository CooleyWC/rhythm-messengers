import { Typography, Box } from '@mui/material'
import React from 'react'

const Card = ({name, title, email, phoneNumber}) => {
  return (
    <Box sx={{width: '216px', px:{xs:4, lg:5}, py:{xs:3, sm:4},}}>
      <Typography sx={{fontSize: {xs:'0.95rem', sm:'1rem'}, fontWeight: 700}}>{name}</Typography>
      <Typography sx={{fontSize: {xs:'0.9rem',sm:'0.95rem'}, fontWeight: 400}}>{title}</Typography>
      <Typography sx={{fontSize: {xs:'0.9rem', sm:'0.95rem'}, fontWeight: 400}}>{email}</Typography>
      {phoneNumber.length > 0 && <Typography sx={{fontSize: {xs:'0.9rem',sm:'0.95rem'}, fontWeight: 400}}>{phoneNumber}</Typography>}
    </Box>
  )
}

export default Card

