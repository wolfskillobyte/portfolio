import React from 'react';
import './style.css';
import Avatar from '../../assets/icons/circle-avatar.png';
import { SvgIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WebIcon from '@mui/icons-material/Web';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import Resume from '../../assets/text/wolfskill-resume.pdf';

function Home() {
	return (
		<div className='home-component-parent'>
			<div className="avatar-icon-container">
				<a href="/">
					<img className="avatar-icon" alt="avatar" src={Avatar} />
				</a>
			</div>

			<div className='typography-title'>
				{'Samantha Wolfskill'}
			</div>

			<ul className="list-container">
				
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
						<div className="typography-default">github</div>
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
						<div className="typography-default">linkedin</div>
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
						<div className="typography-default">discord</div>
					</li>
				</a>

				{/* Deprecated Email - TODO: encrypt or use reCAPTCHA */}
				{/* <a
					href="mailto:"
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
						<div className="typography-default">email</div>
					</li>
				</a> */}

				<a
					href="https://clubwyndham.wyndhamdestinations.com/us/en/resorts/explore-destinations"
					rel="noreferrer"
					target="_blank"
				>
					<li className="list-item-container">
						<SvgIcon 
							component={WebIcon}
							className="svg-icon"
							alt="web-icon"
							fontSize="large"
						/>
						<div className="typography-default">my work in prod</div>
					</li>
				</a>

				{/* Old Resume */}
				{/* <a href={Resume} rel="noreferrer" target="_blank">
					<li className="list-item-container">
						<SvgIcon
							component={PictureAsPdfIcon}
							className="svg-icon"
							alt="adobe-reader-icon"
							fontSize="large"
						/>
						<div className="typography-default">resume</div>
					</li>
				</a> */}
			</ul>
		</div>
	);
}

export default Home;
