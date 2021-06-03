import React from 'react'
import './assets/style/Title.scss'

const Title = (props) =>(
  <div className="title">
    <p className="title__Name">{props.name} - {props.trackName}</p>
    <div className="title__LineDow"></div>
  </div>
)
export default Title