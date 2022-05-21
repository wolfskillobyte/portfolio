import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import './style.css';

function Contact() {
  const [name, setName, email, setEmail, message, setMessage] = useState('');

  return (
    <div>
      <div>
        <h2> get in touch </h2>
      </div>
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
