import styled from 'styled-components';
import { CheckIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

const Container = styled.div`
  position: relative;
  display: inline-block;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + svg {
    display: block;
  }

  svg {
    width: 4rem;
    height: 4rem;
    display: none;
    position: absolute;
    fill: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

type RadioCheck = {
  id: string;
  label?: string;
  checked: boolean;
  onChange: () => void;
};

export default function RadioCheck({
  label = '',
  checked,
  onChange,
  id,
}: RadioCheck) {
  return (
    <Container>
      <label htmlFor={id}>{label || null}</label>
      <input id={id} type="radio" checked={checked} onChange={onChange} />
      <CheckIcon />
    </Container>
  );
}
