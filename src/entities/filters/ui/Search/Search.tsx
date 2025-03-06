import { Input } from '@/shared/ui/Input';
interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

function Search({ keywords, setKeywords }: Props) {
  return <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} />;
}
export default Search;
