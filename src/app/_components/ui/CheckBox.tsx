import styled from 'styled-components';

const Container = styled.div`
  margin-block: 0.5rem;

  label,
  input {
    vertical-align: middle;
  }

  label {
    display: inline-block;
    padding-right: 0.5rem;
    text-align: right;
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
    </Container>
  );
}
