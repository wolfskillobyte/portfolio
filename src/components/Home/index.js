import React from 'react';
import './style.css';
import avatar from '../../assets/icons/circle-avatar.png';
// import { Link } from 'react-router-dom';
import { Container, Link, List, li, SvgIcon, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import Resume from '../../assets/wolfskill-resume.pdf';

function Home() {
	return (
		<div>
			<div className="avatar-icon-container">
				<a href="/">
					<img className="avatar-icon" alt="avatar" src={avatar} />
				</a>
			</div>

			<ul className="list-container">
				{/* <ulItem className="list-item-container">
					<a href="/about">about</a>
				</li>

				<li className="list-item-container">
					<a href="/work">work</a>
				</li> */}

				<a
					href="mailto:samantha.wolfskill@travelandleisure.com"
					rel="noreferrer"
					target="_blank"
				>
					<li className="list-item-container">
						<SvgIcon
							component={EmailIcon}
							className="svg-icon"
							alt="email-icon"
							fontSize="large"
						/>
						<Typography className="typography-default">email</Typography>
					</li>
				</a>

				<a
					href="https://github.com/wolfskillobyte"
					rel="noreferrer"
					target="_blank"
				>
					<li className="list-item-container">
						<SvgIcon
							component={GitHubIcon}
							className="svg-icon"
							alt="github-icon"
							fontSize="large"
						/>
						<Typography className="typography-default">github</Typography>
					</li>
				</a>

				<a
					href="https://www.linkedin.com/in/srwolfskill/"
					rel="noreferrer"
					target="_blank"
				>
					<li className="list-item-container">
						<SvgIcon
							component={LinkedInIcon}
							className="svg-icon"
							alt="linkedin-icon"
							fontSize="large"
						/>
						<Typography className="typography-default">linkedin</Typography>
					</li>
				</a>

				<a
					href="https://discordapp.com/users/746823093468790785"
					rel="noreferrer"
					target="_blank"
				>
					<li className="list-item-container">
						<SvgIcon
							component={SportsEsportsIcon}
							className="svg-icon"
							fontSize="large"
						/>
						<Typography className="typography-default">discord</Typography>
					</li>
				</a>

				<a href="https://www.instagram.com/wolfnards/" rel="noreferrer" target="_blank">
					<li className="list-item-container">
            <SvgIcon
              component={InstagramIcon}
							className="svg-icon"
							alt="instagram-icon"
							fontSize="large"
						/>
						<Typography className="typography-default">instagram</Typography>
					</li>
				</a>

				<a href={Resume} rel="noreferrer" target="_blank">
					<li className="list-item-container">
            <SvgIcon
              component={PictureAsPdfIcon}
							className="svg-icon"
							alt="adobe-reader-icon"
							fontSize="large"
						/>
						<Typography className="typography-default">resume</Typography>
					</li>
				</a>
			</ul>
		</div>
	);
}

export default Home;
