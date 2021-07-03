import React from 'react';
import styled from 'styled-components';
import CardBubble from './CardBubble';
import Title from './Title';

const Homepage = () => {
	return (
		<>
			<Title>Pick a Card Type</Title>
			<Info>Send e-cards in an instant to anyone in your life!</Info>
			<Small>
				<i>Results with Outlooks are subpar.</i>
			</Small>
			<Cards>
				<CardBubble
					path={'/birthday'}
					imgPath={'../.././birthday.png'}
					type={'Birthday'}
				/>
				<CardBubble
					path={'/christmas'}
					imgPath={'../.././christmas.png'}
					type={'Xmas'}
				/>
				<CardBubble
					path={'/valentines'}
					imgPath={'../.././heart.png'}
					type={"Valentine's Day"}
				/>
				<CardBubble
					path={'/funny'}
					imgPath={'../.././funny.png'}
					type={'Funny'}
				/>
				<CardBubble
					path={'/custom'}
					imgPath={'../.././custom.png'}
					type={'Custom'}
				/>
			</Cards>
		</>
	);
};

const Cards = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`;

const Info = styled.p`
	margin-top: 30px;
	margin-bottom: 15px;
	width: 70%;
	font-size: 25px;
	text-align: center;
`;

const Small = styled.p`
	font-size: 12px;
`;

export default Homepage;
