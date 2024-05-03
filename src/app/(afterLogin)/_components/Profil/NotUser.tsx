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
  height: 42rem;
`;

const MessageWrraper = styled.div`
  font-size: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.8em 1.9em;
  margin: 5rem auto;

  > span:first-child {
    font-size: 2.9rem;
    font-weight: bold;
    text-align: center;
  }

  > span:last-child {
    color: #536471;
    font-size: 1.4rem;
    text-align: center;
  }
`;

const NotImage = styled.div`
    position: absolute;
    top: calc(50% - 10px);
    left: 15%;
    transform: translate(-50%, -50%);
    background-color: #F7F9F9;
    width: 13.4rem;
    height: 13.4rem;
    border-radius: 9999px;
    border: 3px solid #FFFFFF;
`;
