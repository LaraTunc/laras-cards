import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
	margin-top: 15px;
	height: 2em;
	border-radius: 5px;
	border: 3px solid #d6e0ff;
	padding: 0px 20px;
	background: #d6e0ff;
	&:focus {
		outline: none;
		box-shadow: 0 0 10px #9ecaed;
	}
	&:hover {
		border: 1px solid #9ecaed;
		box-shadow: 0 0 10px #9ecaed;
	}
`;

export default Button;
