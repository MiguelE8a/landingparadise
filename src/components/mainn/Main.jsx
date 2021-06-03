import React from 'react'
import './style/Main.scss'
import Metada from './Metadata.jsx'
import Retailer from './Retailer.jsx'

const Main = () =>(
  <div className="main">
    <div className="contain-metadata">
      <Metada 
        titleTrack="Paradise"
      />
    </div>
    <div className="container-Retailer">
      <Retailer />
    </div>
  </div>
)
export default Main 