import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<Wrapper>
			<StyledLink to="/contact-us">Contact Me</StyledLink>
			<div>|</div>
			<StyledLink to="/portfolio">More from Lara</StyledLink>
			<div>|</div>
			<Div>April 20, 2021</Div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	background: #6495ed;
`;

const StyledLink = styled(NavLink)`
	color: black;
	font-size: 14px;
	text-decoration: none;
	margin: 0px 15px;
	&:hover {
		cursor: pointer;
	}
`;

const Div = styled.div`
	font-size: 14px;
	margin: 0px 15px;
`;

export default Footer;
