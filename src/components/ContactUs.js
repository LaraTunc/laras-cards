import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ContactConfirmation from './ContactConfirmation';
import Form from './Form';
import Input from './Input';
import Title from './Title';

const ContactUs = ()=>{
    const [submitted,setSubmitted]= useState();
    // make fields required

    return (
        <Wrapper>
            {submitted 
            ? <ContactConfirmation/> 
            : <>
                <Title>Contact Us</Title>
                <Form>
                    <Input type={"email"} placeholder={"Email"} required/>

                    <Textarea placeholder="What's on your mind?" required/>

                    <Button onClick={()=>setSubmitted(true)}>Submit</Button>
                </Form>
            </>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Textarea = styled.textarea`
border-radius:5px;
border: 1px solid lightgray;
height: 5em;
margin-top:15px;
&:focus{
    outline: none;
    box-shadow: 0 0 10px #9ecaed;
};
`;

export default ContactUs;
