import React from 'react'
import { Pagination } from '@mui/material'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Main2 from '../Main/Main2';
import "./Pagination.css"

const PaginationRounded = () => {  
   
   
  return (
    <div className='pag'>
      <button className='fs'> <Link to="/">&lsaquo;</Link></button> 
      <ul>
      <li> <Link to="/">1</Link>
      </li>
      <li><Link to="/page2">2</Link> </li>
      </ul>
      <button> <Link to="/page2">&rsaquo;</Link></button>
      </div>
  )
}

export default PaginationRounded