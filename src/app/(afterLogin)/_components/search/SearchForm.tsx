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
  margin-top: 6px;
  margin-bottom: 12px;
  height: 50px;
`;

const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  position: fixed;
  width: inherit;
  height: 42px;
  border-radius: 21px;
  background-color: rgb(239, 243, 244);

  svg {
    margin-left: 20px;
    fill: rgb(83, 100, 113);
    width: 20px;
  }

  input {
    border-radius: 21px;
    outline: none;
    background-color: inherit;
    border: none;
    padding: 12px;
    margin-left: 5px;
    font-size: 15px;
    width: 100%;
  }
`;
