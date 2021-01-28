import styled from 'styled-components';

import React from 'react';

const Logo = styled.img`
    width: 80%;
    height: 80px;
    object-fit: cover
`;

export default function QuizLogo() {
  return (
    <Logo src="https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg" />
  );
}