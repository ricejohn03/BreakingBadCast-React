import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/UI/header'
import axios from 'axios'
import CharaterGrid from './components/charaters/charatergrid'
import Search from './components/UI/search'

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const results = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            console.log(results.data)
            setItems(results.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [query])

  return (
      <div className="container">
          <Header />
          <Search getQuery={(q) => setQuery(q)} />
          <CharaterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
