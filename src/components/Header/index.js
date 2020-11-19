import React from 'react';

import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';

import { Container } from './styles';

const icons = [
  {
    key: String(Math.random()),
    image: image1,
    description: 'O que é resiliência?',
  },
  {
    key: String(Math.random()),
    image: image2,
    description: 'Como melhorar a resiliência?',
  },
  {
    key: String(Math.random()),
    image: image3,
    description: 'Depoimento:',
  },
];

function Header() {
  return (
    <Container>
      <h1>Resiliência é importantet para os Devs?</h1>

      <ul>
        {icons.map((icon) => (
          <li key={icon.key}>
            <img src={icon.image} alt="icons" />
            <p>{icon.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Header;
