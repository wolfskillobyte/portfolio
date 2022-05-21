import React from 'react';
import wolfPic from '../../assets/wolf-pic.jpg';
import './style.css';
import { Card, CardContent, Container } from '@mui/material';

function About() {
  return (
    <div className='container'>
      <h2>i'm wolf!</h2>
      <Card id='about-card-1'>
        <CardContent className='about-card'>
          My birth name is Samantha Wolfskill.
          <Container>
            <img
              title='hangin in Malibu'
              id='wolfpic'
              alt='wolfpic'
              src={wolfPic}
            />
          </Container>
          <ul>
            <li>
              I'm a full-stack JavaScript developer with a proclivity for UX/UI.
            </li>
            <li>
              I love solving puzzles, enhancing code, and creating/collaborating
              on projects.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card id='about-card-2'>
        <CardContent className='about-card'>
          I'm currently working on...
          <ul>
            <li>- honing React skills</li>
            <li>
              - prepping for interviews. send me problems to solve or your
              favorite YouTube videos for technical interviews!{' '}
            </li>
            <li>
              - frameworking a game: 'Wordle with friends' (working title){' '}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
