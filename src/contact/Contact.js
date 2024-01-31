import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import { Container } from '@mui/material';


const Contact = (props) => {
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    //handle user's email and message
  }
  return (
    <div>
      <Container>
        <h1>Contact</h1>
        <FormControl>
          <FormLabel>Your comment</FormLabel>
          <Textarea
            placeholder="Type something here…"
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: 'flex',
                  gap: 'var(--Textarea-paddingBlock)',
                  pt: 'var(--Textarea-paddingBlock)',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  flex: 'auto',
                }}
              >
                <IconButton
                  variant="plain"
                  color="neutral"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <FormatBold />
                  <KeyboardArrowDown fontSize="md" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  size="sm"
                  placement="bottom-start"
                  sx={{ '--ListItemDecorator-size': '24px' }}
                >
                  {['200', 'normal', 'bold'].map((weight) => (
                    <MenuItem
                      key={weight}
                      selected={fontWeight === weight}
                      onClick={() => {
                        setFontWeight(weight);
                        setAnchorEl(null);
                      }}
                      sx={{ fontWeight: weight }}
                    >
                      <ListItemDecorator>
                        {fontWeight === weight && <Check fontSize="sm" />}
                      </ListItemDecorator>
                      {weight === '200' ? 'lighter' : weight}
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  variant={italic ? 'soft' : 'plain'}
                  color={italic ? 'primary' : 'neutral'}
                  aria-pressed={italic}
                  onClick={() => setItalic((bool) => !bool)}
                >
                  <FormatItalic />
                </IconButton>
                <Button sx={{ ml: 'auto' }}>Send</Button>
              </Box>
            }
            sx={{
              minWidth: 300,
              fontWeight,
              fontStyle: italic ? 'italic' : 'initial',
            }}
          />
        </FormControl>
      </Container>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Your Email
          <input
            type='text'
            value={email}
            placeholder='Your Email'
            onClick={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Your Message
          <input
            type='textarea'
            value={message}
            placeholder='Your Message'
            onClick={(e) => setMessage(e.target.value)} />
        </label>
        <button>Sumbit Message</button>
      </form> */}
      {/* <h3>Representation</h3>
            <Card
            name="THOMAS BENKO" 
            title="Band Leader" 
            email="" 
            phoneNumber=" 1-630-415-9521"/>
            <Card 
            name="LIVE ART INTERNATIONAL" 
            title="Agent - Dayna Malow" 
            email="info@liveartinternational.com" 
            phoneNumber="1-800-985-9330"/>
            <Card 
            name="SF Agent" 
            title="Pinnacle - Nathan Kelly"
            email="" 
            phoneNumber="1-800-769-3322"/> */}
    </div>
  );
}

export default Contact;