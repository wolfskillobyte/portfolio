import React, { useState } from 'react';
import { Button, Container, TextField, SvgIcon, Tooltip } from '@mui/material';
import './style.css';
import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Contact() {
  const [name, setName, email, setEmail, message, setMessage] = useState('');

  return (
    <div>
      <div>
        <h1> get in touch </h1>
      </div>

      <Container>
        <a
          href='mailto:sraewolfskill@gmail.com'
          rel='noreferrer'
          target='_blank'
        >
          <Tooltip title='Email directly'>
            <SvgIcon alt='email-icon' fontSize='large' component={EmailIcon} />
          </Tooltip>
        </a>{' '}
        {/*  */}
        <a
          href='https://discordapp.com/users/746823093468790785'
          rel='noreferrer'
          target='_blank'
        >
          <Tooltip title='Add me on Discord'>
            <SvgIcon
              alt='discord-icon'
              fontSize='large'
              component={SportsEsportsIcon}
            />
          </Tooltip>
        </a>
      </Container>

      <form>
        <Container>
          <TextField
            id='form-input'
            variant='filled'
            placeholder='your name'
            name='name'
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Container>

        <Container>
          <TextField
            id='form-input'
            variant='filled'
            placeholder='your email'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Container>

        <Container>
          <TextField
            id='textbox'
            variant='filled'
            placeholder='leave a message'
            name='message'
            type='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Container>
        <Button id='submit-button' type='submit'>
          send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
