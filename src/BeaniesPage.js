import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBeanies, setFilteredBeanies] = useState([]);
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to);
    
      setBeanieBabies(beanies);
    }

    fetch();

  }, [page]); // what can you do with this array to trigger a fetch every time the page changes?

  useEffect(() => {
    const filteredBeaniesBabies = beanieBabies.filter(beanie => beanie.title.includes(searchQuery));
    setFilteredBeanies(filteredBeaniesBabies);

  }, [searchQuery, beanieBabies]);

  return (
    <>
      <h3>Search (on type)</h3>
      <input onChange={(e) => setSearchQuery(e.target.value)}/>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
        {/* on click, this button should increment the page in state  */}
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      <BeaniesList
        beanieBabies={searchQuery.length 
          ? filteredBeanies
          : beanieBabies}/>
    </>
  );
}

export default App;
