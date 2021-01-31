/* eslint-disable react/prop-types */
import styled from 'styled-components';

import React from 'react';

const Logo = styled.img`
    width: 50%;
    height: 50px;
    object-fit: cover
`;

export default function QuizLogo() {
  return (
    <Logo src="https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg" />
  );
}
