import React from 'react'
import './style/Retailer-li.scss'

const Retailer_li = ({image, title, url}) => (
  <li className="retailer-li">
        <a href={url} className="retailer-main--item" target="_blank" rel="noreferrer">
          <div className="retailer-container--img">
            <img src={image} alt="retail logo" className="retailer-img" />
          </div>

          <div className="retailer-text">
            {title}
          </div>
        </a>
      </li>
)

export default Retailer_li