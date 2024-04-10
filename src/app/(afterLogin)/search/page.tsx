import Header from '@/app/_components/ui/Header';
import SearchForm from '../_components/search/SearchForm';
import Tab from '../_components/tab/Tab';
import { Container } from './_styled';
import SearchResult from '../_components/search/SearchResult';

type SearchProps = {
 searchParams: {q: string, f?: string, pf?: string}
};
export default function Search({ searchParams }:SearchProps) {
  return (
    <Container>
      <Header mainText={<SearchForm />} />
      <Tab />
      <p><SearchResult searchParams={searchParams} /></p>
    </Container>
  );
}
