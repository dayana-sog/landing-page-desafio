/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

function LandingInformations({ info }) {
  const { image, typeValue, classType, title, description } = info;

  return (
    <Container className={classType}>
      <div>
        <h1>{typeValue}</h1>
        <h3>{title}</h3>
        <p>{classType === 'image06' ? `"${description}"` : description}</p>
      </div>

      <aside>
        <img src={image} alt={title} />
        {classType === 'image06' ? (
          <>
            <span>Dayana Gonçalves</span>
            <span>Front-End Developer</span>
          </>
        ) : null}
      </aside>
    </Container>
  );
}

export default LandingInformations;
