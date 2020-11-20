import styled from 'styled-components';

import footerImage from '../../assets/footer.jpeg';

export const Container = styled.div`
  height: 530px;
  position: relative;

  background: url(${footerImage}) no-repeat;
  background-size: cover;

  form {
    position: absolute;
    top: 90px;
    right: 180px;
    display: inline-block;

    background: #c4c4c4;
    padding: 40px 30px;
    border: none;
    border-radius: 40px;

    h2 {
      text-align: center;
      width: 450px;
    }

    label {
      display: block;
    }

    input {
      display: block;
      height: 40px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #272727;
      border: 1px solid #e1e1e1;
      border-radius: 10px;
      width: 100%;
      padding-left: 10px;
    }

    button {
      width: 200px;
      padding: 10px;
      font-size: 1em;
      border-radius: 10px;
      background: #333;
      color: #fff;
      border: none;
      justify-items: center;

      &:hover {
        background: red;
        cursor: pointer;
      }
    }
  }
`;
