import styled from "styled-components";

import key from "@/app/_utils/key";

const trandList = [
  { title: "대한민국에서 트렌드중", content: "우리 택연" },
  { title: "뮤직 - 실시간 트렌드", content: "승관 버논" },
  { title: "대한민국에서 트렌드중", content: "벌써 일본" },
  { title: "대한민국에서 트렌드중", content: "해군 관악대" },
  { title: "대한민국에서 트렌드중", content: "우리 택연" },
  { title: "뮤직 - 실시간 트렌드", content: "승관 버논" },
  { title: "대한민국에서 트렌드중", content: "벌써 일본" },
  { title: "대한민국에서 트렌드중", content: "해군 관악대" },
  { title: "대한민국에서 트렌드중", content: "우리 택연" },
  { title: "뮤직 - 실시간 트렌드", content: "승관 버논" },
];

const MyTrandList = () => {
  return (
    <Container>
      <span>나를 위한 트렌드</span>
      {trandList.map((item, index) => (
        <ItemContainer key={key(item.title, index)}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default MyTrandList;

const Container = styled.div`
  width: inherit;
  background-color: RGB(247, 249, 249);
  border-radius: 15px;
  padding-block: 11px;
  padding-inline: 15px;
  > span {
    font-weight: 800;
    font-size: 19px;
  }
`;

const ItemContainer = styled.div`
  cursor: pointer;
  margin-block: 20px;
  p:last-child {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.5;
  }
`;
