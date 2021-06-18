import React from 'react'
import './style/RetailerDownLoad.scss'

const RetailerDownLoad = (props) => (
  <a href={props.url} className="ReateilerDownLoad-container" target="_blank" rel="noreferrer">
    <div className="  ReateilerDownLoad-container__text">
        {props.title}
    </div>
  </a>
)

export default RetailerDownLoad