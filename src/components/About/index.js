import React from 'react';
import wolfPic from '../../assets/wolf-pic.jpg';
import './style.css';
import { Container } from '@mui/material';

function About() {
  return (
    <div className='container'>
      <h1>i'm wolf!</h1>

      <Container id='project-card'>
        <h3>My birth name is Samantha Wolfskill.</h3>
        <Container>
          <img
            title='hangin in Malibu'
            id='wolfpic'
            alt='wolfpic'
            src={wolfPic}
          />
        </Container>
        <p>
          <ul>
            <li>
              I'm a full-stack JavaScript developer with a design background.
            </li>
            <li>
              I love solving puzzles, enhancing code, and creating/collaborating
              on projects.
            </li>
            <li>
              My skills and favorite programs include JavaScript, React, Node,
              GraphQL, Python, and SQL. I love front-end because of my design
              background, but I also enjoy data structuring and organizing on
              the back end. Overall, I am an individual with endless interests
              that keep me productive and constantly learning!
            </li>
          </ul>
        </p>
      </Container>

      <Container id='project-card'>
        <p>
          I'm currently working on...
          <ul>
            <li>- continuing to learn Python, TypeScript, and C#</li>
            <li>- updating and improving old projects</li>
            <li>- studying algorithms</li>
            <li>
              - prepping for interviews. send me problems to solve or your
              favorite YouTube videos for technical interviews!{' '}
            </li>
            <li>
              - frameworking a game: 'Wordle with friends' (working title){' '}
            </li>
          </ul>
        </p>
      </Container>

      <Container id='project-card' key='card3'>
        <div className='about-card'>
          <p>
            Thank you to <a href='https://ummmmandy.tumblr.com/'>Mandy</a> for
            her avatar-creator.
            <br></br>Please check out her wonderful art! 🌙
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
