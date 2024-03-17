import React from 'react'

import "./searchbar.scss"


const types = ['buy', 'rent']

const Searchbar = () => {
  const [query, setQuery] = React.useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0
  })

  const switchType = (param) => {
    setQuery(prev => (
        {...prev, type: param}
    ))
  }

  return (
    <div className='searchBar'>
        <div className='type'>
            {types.map((type) => (
                <button 
                    key={type} 
                    type='button' 
                    className={query.type === type ? 'active' : ''}
                    onClick={() => switchType(type)}
                >{type}</button>
            ))}     
        </div>
        <form>
            <input type='text' name='location' placeholder='City Location' />
            <input type='number' name='minPrice' min={0} max={10000000} placeholder='Min Price' />
            <input type='number' name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
            <button type='submit'>
                <img src='/search.png' alt='' />
            </button>
        </form>
    </div>
  )
}

export default Searchbar