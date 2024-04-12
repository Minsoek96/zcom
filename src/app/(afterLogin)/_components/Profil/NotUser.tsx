import styled from 'styled-components';

export default function NotUser() {
  return (
    <Container>
      <span>계정이 존재하지 않음</span>
      <span>다른 검색어를 시도해보세요.</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 38px 19px;
  margin: 30px auto;
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
