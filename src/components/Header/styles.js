import styled from 'styled-components';

export const Container = styled.div`
  height: 450px;
  width: 100%;
  padding: 80px 200px 40px;

  background: #d0021b;
  color: #fff;

  h1 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 20px 100px;

    li {
      padding: 45px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 95px;
        height: 95px;
      }

      p {
        margin-top: 40px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
`;
