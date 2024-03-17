import React from 'react'

import { listData } from '../../lib/data'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'
import Map from '../../components/Map/Map'


import './listing.scss'

const Listing = () => {
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
            <Filter />
            {listData.map(item=>(
              <Card key={item.id} item={item}/>
            ))}
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={listData}/>
      </div>
    </div>
  )
}

export default Listing