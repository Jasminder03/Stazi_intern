import React from 'react'
import Bmw from '../Cards/Bmw'
import BasicExample from '../Cards/BasicExample'
import { Toyota } from '../Toyota'
import { BmwImage } from '../BmwImage'
import "./Main.css"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { gti } from '../Bmwgti'
import BmwGTI from '../Cards/BmwGTI'
import Cadillac from '../Cards/Cadillac'
import { cd } from '../Cadiilacig'
import Volkswagen from '../Cards/Volkswagen'
import { voks } from '../Volkswagen'
import BmwSerie4 from '../Cards/BmwSerie4'
import { S4 } from '../BmwS4'
import PaginationRounded from '../Pagination/PaginationRounded'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { posts } from '../Posts'






function Main2 ({pst})  {
 
  const [currentpage, setCurrentPage] = useState(1)
  const [postsperpage, setPostsPerPage] = useState(6)

   const indeOfLastPost =  currentpage * postsperpage;
   const indexOfFirstPost = indeOfLastPost - postsperpage;
   const currentposts = posts.slice(indexOfFirstPost, indeOfLastPost)
  


  return (
   <>

   <div className='bar'>
    <input type='text'  placeholder='Search'></input>
    <SearchIcon className='sch'/>
    <div className='link'>     
       <a href='#'>Relevance <KeyboardArrowDownSharpIcon className='kd'/></a> 
       <a href='#'>All Brands <KeyboardArrowDownSharpIcon  className='kd'/></a>
        </div>

   </div>
   <hr></hr>
      <div className='clearfix'>
        <h2> <u>Second Page </u></h2>
        <div className='cd'>
            <BasicExample images={Toyota} />
           </div>
           <div className='cd'>
            <Bmw  BmwImg={BmwImage}/>
           </div>
           <div className='cd'>
            <BmwGTI Bmvgti={gti} />
           </div>
           <div className='cd2'>
            <BmwSerie4 bws4={S4} />
           </div>
           <div className='cd2'>
            <Cadillac cad={cd} />
           </div>
           <div className='cd2'>
            <Volkswagen vk={voks} />
           </div>
        </div>
        <PaginationRounded />
           
    </>
  )
}

export default Main2