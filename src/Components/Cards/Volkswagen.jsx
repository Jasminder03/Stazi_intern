import React from 'react'
import "./BasicExample.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



function Volkswagen  ({vk}) {
    const [current, setCurrent] = useState(0);
  
    return (
     
  
      <div> 
        <Card style={{ width: '18rem' }}>
      {vk.map((cadi, index) => {
        return (
          <div key={index} className={index == current ? "card_image card_image_active" : "card_image"}>
            <Card.Img variant="top" src={cadi.src} />
          </div>
        )
      })}
      <div className="carousel_pagination">
        {vk.map((_, index) => {
          return (
            <div key={index} className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick={() => setCurrent(index)}>
            </div>
          )
        })}
      </div>
      <Card.Body>
        <Card.Title><p className='vk'>Volkswagen T-Cross</p> <h5>2020</h5></Card.Title>
        <Card.Text>
          <PeopleAltIcon /> <div className="desc">4 People</div>
          <LocalGasStationIcon /><div className="desc">Gasoline</div>
          <SpeedIcon /> <div className="desc">5.3km / 1-litre </div>
          <SettingsSuggestIcon /> <div className="desc"> Automatic </div>
        </Card.Text>
        <hr></hr>
        <div className="price">
          <h3>$400</h3><h6>/month</h6>
          <div className="like">
            <FavoriteBorderIcon />
          </div>
          <Button variant="primary" className='bt'>Rent Now</Button>
        </div>
      </Card.Body>
    </Card>
    
  
  </div>
    )
  }


export default Volkswagen