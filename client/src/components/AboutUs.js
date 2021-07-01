import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const AboutUs = () => {
	return (
		<>
			<Title text={'About Me'} />
			<Pic src=".././LaraTunc.jpg" alt="Lara Tunc" />
			<Paragraph>
				Hello! My name is Lara and I like to code 💻. This is a project I did
				for my final project for my bootcamp.
			</Paragraph>
			<Paragraph>
				When I was looking for ideas as to what to build I remembered that
				recently I tried sending a 💌 to my friend but all available options
				required 💰. Being excited to show off my newly polished coding skills
				and a supporter of free accessible technology for everyone, I thought
				that if it doesn't exist I can create it myself 💅. This is what came
				out of this idea.
			</Paragraph>
			<Paragraph>
				I hope you find it useful! If you would like to see other projects from
				me please refer to my portfolio below at the footer 😉
			</Paragraph>
			<Paragraph>
				<b>NOTE:</b> Results subpar with Outlook. Use Gmail for the best
				experience.
			</Paragraph>
		</>
	);
};

const Pic = styled.img`
	object-fit: cover;
	margin-top: 15px;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	border: 5px solid #80cbc4;
`;

const Paragraph = styled.p`
	margin-top: 15px;
	width: 40%;
`;

export default AboutUs;
