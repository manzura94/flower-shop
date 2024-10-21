import Image from '@/node_modules/next/image';
import search from '@/public/icons/search.svg';

const SearchIcon = () => (
  <div>
    <Image src={search} width={32} height={32} alt="search icon" />
  </div>
);

export default SearchIcon;