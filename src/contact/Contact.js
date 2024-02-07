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
import Container from '@mui/material/Container';
import Input from '@mui/joy/Input';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId='service_g3c0vfn';
    const templateId='template_raegahg';
    const publicKey=process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_email: email,
      to_name: 'Rhythm Messengers',
      message: message,
    };
    
    emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then((res)=>{
        console.log('success', res)
        setEmail('')
        setMessage('')
        
      })
      .catch((error)=>{
        console.error('error', error)
      });
  }
  return (
    <Container sx={{ color: 'white', paddingBottom: '46px', paddingTop: '46px' }} >
      <form onSubmit={handleSubmit}>
        <Grid>
          <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '48px', color: '#f77a00' }}>
            Contact
          </Typography>
        </Grid>
        <Grid>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth={false}
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Message"
              minRows={3}
              endDecorator={
                <Box
                  sx={{
                    display: 'flex',
                    gap: 'var(--Textarea-paddingBlock)',
                    pt: 'var(--Textarea-paddingBlock)',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    flex: 'auto'

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
                  <Button type='submit' sx={{
                    ml: 'auto',
                    backgroundColor: '#f77a00',
                    '&:hover': {
                      backgroundColor: '#f77a00'
                    }
                  }}>Submit Message</Button>
                </Box>
              }
              sx={{
                minWidth: 300,
                fontWeight,
                fontStyle: italic ? 'italic' : 'initial',
                '&:focus-within': {
                  border: '2px solid #f77a00'
                }
              }}
            />
          </FormControl>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;