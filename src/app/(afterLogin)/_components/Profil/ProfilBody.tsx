import { styled } from "styled-components";
import Banner from "./Banner";
import ImageLink from "../Post/ImageLink";
import ProfilActionBtns from "./ProfilActionBtns";

const ProfilBody = () => {
  return (
    <Container>
      <Banner />
      <ImageLink src={"/default.PNG"} id={"logo"} width={134} height={134} />
      <ProfilActionBtns />
      <div>
        <span>{6}팔로우 중</span>
        {' '}
        <span>{3000}팔로워</span>
      </div>
    </Container>
  );
};

export default ProfilBody;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 420px;

  > a:nth-child(2) {
    position: absolute;
    top: calc(50% - 10px);
    left: 15%;
    transform: translate(-50%, -50%);
  }

  > div:last-child {
    position: absolute;
    bottom: 0;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 11px;
    padding-inline: 15px;
    > span {
      margin-right: 19px;
      font-size: 13px;
    }
  }
`;
