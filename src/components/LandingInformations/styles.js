import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 450px;

  background: ${(props) =>
    props.className === 'image05' ? '#efefef' : '#ffffff'};
  padding: 60px 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: ${(props) =>
    props.className === 'image05' ? 'row-reverse' : ''};

  div {
    width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: bold;
      font-size: 120px;
    }

    h3 {
      font-weight: bold;
      font-size: 36px;
    }

    p {
      margin-bottom: 15px;
      margin-top: 10px;
      text-align: center;

      ${(props) =>
        props.className === 'image06' &&
        css`
          font-style: italic;
        `}
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: ${(props) => (props.className === 'image06' ? '190px' : '220px')};
      height: ${(props) => (props.className === 'image06' ? '170px' : '170px')};
      ${(props) =>
        props.className === 'image06' &&
        css`
          border-radius: 50%;
        `}
      margin-left: ${(props) =>
        props.className === 'image05' ? '0px' : '30px'};

      ${(props) =>
        props.className === 'image05' &&
        css`
          margin-right: 30px;
        `}
    }

    span {
      margin-left: 30px;
      color: #61376e;
      font-size: 18px;
      font-weight: bold;

      &:not(:last-of-type) {
        margin-bottom: 5px;
        margin-top: 20px;
      }
    }
  }
`;
