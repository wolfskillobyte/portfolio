import React from 'react';
import './style.css';
import { Card, CardContent, Container, Grid } from '@mui/material';

// photos
import readingRambo from '../../assets/projects/rr-icon.png';
import dnd from '../../assets/projects/dnd-creator.jpg';
import pantryHacker from '../../assets/projects/pantry-hacker.jpg';
import weather from '../../assets/projects/weather-app.jpg';
import codeQuiz from '../../assets/projects/code-quiz.jpg';
import workday from '../../assets/projects/work-sched.jpg';
import passGen from '../../assets/projects/pass-gen.jpg';
import robotFight from '../../assets/projects/robot-gladiators.jpg';

const Work = () => {
  const projects = [
    {
      id: 'reading-rambo',
      name: 'Reading Rambo',
      description:
        'Connecting book lovers to movies, and movie lovers to books, by allowing users to search for their favorites of either and find the inverse, corresponding media.',
      image: readingRambo,
      url: 'https://calm-river-58569.herokuapp.com/'
    },
    {
      id: 'dnd-creator',
      name: 'D&D Character Creator',
      description:
        'Generate a character at random for your next D&D campaign! Using the D&D 5E API, this application is perfect for getting quick character details for beginners, NPCs, or one-shots.',
      image: dnd,
      url: 'https://wolfskillobyte.github.io/dnd-character-creator/'
    },
    {
      id: 'pantry-hacker',
      name: 'Pantry Hacker',
      description: 'A simple search tool for quick recipe information. ',
      image: pantryHacker,
      url: 'https://morning-spire-78833.herokuapp.com/'
    },
    {
      id: 'weather-app',
      name: 'Weather App',
      description:
        'Who wants to talk about the weather? Search by location to get the current weather and forecast! ',
      image: weather,
      url: 'https://wolfgarb.github.io/stormy-and-blowie'
    },
    {
      id: 'work-sched',
      name: 'Workday Scheduler',
      description:
        'As a coding student who studies and works full-time, I need a daily planner to help me schedule errands and other to-dos! ',
      image: workday,
      url: 'https://github.com/wolfskillobyte/daily-planner'
    },
    {
      id: 'robot-fight',
      name: 'Robot Gladiators',
      description: 'My first gamified application learning Javascript.',
      image: robotFight,
      url: 'https://wolfskillobyte.github.io/robot-gladiators/'
    },
    {
      id: 'pass-gen',
      name: 'Password Generator',
      description:
        'Need a secure password? Let the computer do the work for you. Choose a password length, and what to include: lowercase letters, uppercase letters, numbers, or symbols. ',
      image: passGen,
      url: 'https://wolfskillobyte.github.io/frank-stallone/'
    },
    {
      id: 'code-quiz',
      name: 'Code Quiz',
      description:
        'A timed quiz to test coding knowledge. Beat the clock and save your high score! ',
      image: codeQuiz,
      url: 'https://wolfskillobyte.github.io/coffee-stain/'
    }
  ];

  return (
    <div className='work-page'>
      <h2> my work </h2>
      {projects.map((project, i) => (
        <Grid className='project-body' container spacing={1}>
          <Grid item xs={8}>
            <Card id='project-card' key={project.id}>
              <CardContent className='card-content'>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <Container>
                  <div class='border'>
                    <a href={project.url} target='_blank' rel='noreferrer'>
                      <img
                        className='img-thumb'
                        src={project.image}
                        alt={project.name}
                        key={project.id}
                      />
                    </a>
                  </div>
                </Container>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Work;
