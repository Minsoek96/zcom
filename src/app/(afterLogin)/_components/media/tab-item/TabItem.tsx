import { styled } from 'styled-components';
import { TabInfo, TabType } from '../Media';

type TabItemProps = {
  onClick: (type: TabType) => void;
  isSeleted: boolean;
  tab: TabInfo;
};

export default function TabItem({ onClick, isSeleted, tab }: TabItemProps) {
  return (
    <TabWrrapper onClick={() => onClick(tab.type)} $isSeleted={isSeleted}>
      {tab.main}
      <div />
    </TabWrrapper>
  );
}

const TabWrrapper = styled.div<{ $isSeleted: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding-inline: 1.6rem;

  margin-right: 1rem;

  > div:last-child {
    position: absolute;
    bottom: 1px;
    display: flex;
    background-color: ${(props) => props.$isSeleted && props.theme.colors.mainColor};
    height: 4px;
    width: 5.6rem;
  }

  svg {
    fill: ${(props) => (props.$isSeleted
    ? props.theme.colors.mainFont
    : props.theme.colors.secondFont)};
  }

  span {
    font-size: 1.5rem;
    color: ${(props) => (props.$isSeleted
    ? props.theme.colors.mainFont
    : props.theme.colors.secondFont)};
  }
`;
