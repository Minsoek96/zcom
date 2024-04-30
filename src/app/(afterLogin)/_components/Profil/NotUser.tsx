import styled from 'styled-components';

import Banner from './Banner';

export default function NotUser() {
  return (
    <Container>
      <Banner />
      <NotImage />
      <MessageWrraper>
        <span>계정이 존재하지 않음</span>
        <span>다른 검색어를 시도해보세요.</span>
      </MessageWrraper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 420px;
`;

const MessageWrraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 38px 19px;
  margin: 50px auto;

  > span:first-child {
    font-size: 29px;
    font-weight: bold;
    text-align: center;
  }

  > span:last-child {
    color: #536471;
    font-size: 14px;
    text-align: center;
  }
`;

const NotImage = styled.div`
    position: absolute;
    top: calc(50% - 10px);
    left: 15%;
    transform: translate(-50%, -50%);
    background-color: #F7F9F9;
    width: 134px;
    height: 134px;
    border-radius: 9999px;
    border: 3px solid #FFFFFF;
`;
