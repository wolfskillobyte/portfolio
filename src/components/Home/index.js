import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/wolfskill-resume.pdf';
// import reactLogo from '../../assets/icons/logo192.png';

function Home() {
  return (
    <div>
      <h1 id='header'>howdy!</h1>

      <Container id='project-card'>
        <div>Welcome! Use the left navigation to explore.</div>
        <div>
          <a key='resume' target='_blank' rel='noreferrer' href={resume}>
            view resume
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Home;
