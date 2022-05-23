import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/wolfskill-resume.pdf';
// import reactLogo from '../../assets/icons/logo192.png';

function Home() {
  return (
    <Container id='main-container'>
      <h1 id='header'>howdy!</h1>
      <Container id='home-card' key='home-card'>
        welcome to my page
        <div>
          <a key='resume' target='_blank' rel='noreferrer' href={resume}>
            view resume
          </a>
        </div>
        <span className='italic'>i'm still a work in progress! </span>🚧
      </Container>

      <Container id='home-card' key='home-card'>
        Thank you to <a href='https://ummmmandy.tumblr.com/'>Mandy</a> for her
        avatar-creator.
        <br></br>Please check out her wonderful art! 🌙
        <div></div>
      </Container>
    </Container>
  );
}

export default Home;
