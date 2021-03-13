import React from "react";
import styled from 'styled-components';
import Title from "./Title";

const AboutUs = ()=> {
    return (
        <>
            <Title text={"About Me"}/>
            <Pic src=".././LaraTunc.jpg" alt="Lara Tunc"/>
            <Paragraph>Hello! My name is Lara and I like to code. This is a project I did for my final project for my bootcamp.</Paragraph>
            <Paragraph>When I was looking for ideas as to what to build I remembered an incident that occurred recently. A couple weeks back, I had wanted to send an e-card to my friend for her birthday and I couldn't find any free options. Having been almost done with my education and being excited to exercise my recently obtained skills, I thought that if it doesn't exist I can create it myself. This is what came out of this idea.</Paragraph>
            <Paragraph>I hope you find it useful! If you would like to see other projects from me please refer to my portfolio here. You can also refer to the More from Lara link below.</Paragraph>
        </>
    );
};


const Pic = styled.img`
object-fit:cover;
margin-top: 15px;
border-radius:50%;
width: 120px;
height: 120px;
`;

const Paragraph = styled.p`
margin-top: 15px;
max-width: 600px;
`;

export default AboutUs;