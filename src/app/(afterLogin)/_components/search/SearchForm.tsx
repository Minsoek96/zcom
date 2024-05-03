'use client';

import { styled } from 'styled-components';

import { useRouter } from 'next/navigation';
import { SearchIcon } from '../../_constants/MenuIcons';

function SearchForm() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${e.currentTarget.search.value}`);
  };

  return (
    <SearchContainer>
      <SearchFormWrapper onSubmit={onSubmit}>
        <SearchIcon />
        <input name="search" type="search" placeholder="검색" />
      </SearchFormWrapper>
    </SearchContainer>
  );
}
export default SearchForm;

const SearchContainer = styled.div`
  width: inherit;
  margin-top: .6rem;
  margin-bottom: 1.2rem;
  height: 5.0rem;
`;

const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  position: fixed;
  width: inherit;
  height: 4.2rem;
  border-radius: 2.1rem;
  background-color: rgb(239, 243, 244);

  svg {
    margin-left: 20px;
    fill: rgb(83, 100, 113);
    width: 2.0rem;
  }

  input {
    border-radius: 2.1rem;
    outline: none;
    background-color: inherit;
    border: none;
    padding: .8em;
    margin-left: .5rem;
    font-size: 1.5rem;
    width: 100%;
  }
`;
