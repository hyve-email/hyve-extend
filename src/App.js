import React from 'react';
import styled from 'styled-components'
import Icon from './components/Icon'
import HyveLogo from './assets/hyve-logo.png'
import './App.css';

function App() {
  return (
    <RootContainer className="App">
      <Icon size={180} icon={HyveLogo} />
      <span style={{ fontSize: 25, fontWeight: '400', textAlign: 'center' }}>
        Security, Safety, Organization <br /> all in one hyve.
      </span>

      <a target="_blank" href="https://gmail.us3.list-manage.com/subscribe?u=131e40b536b7522dc377d85b6&id=54fd5a4685">
        <SignUpButton>Sign up for Beta</SignUpButton>
      </a>
    </RootContainer>
  );
}

const RootContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: linear-gradient(to bottom right, #7052F5, #35abe6);
color: #fefefe
`;

const SignUpButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  outline: none;
  height: 35px;
  margin-top: 30px;
  border-color: #5282ff;
  color: #f3f3f3;
  align-self: center;
  text-align: center;
  background: #7052F5;

  &:hover {
    cursor: pointer;
  }
`;

export default App;
