import React from 'react'
import Form from 'react-bootstrap/Form';
import { FaYoutube } from "react-icons/fa6";

import Videodetails from './Videodetails';
import Videolist from './Videolist';
import Contents from './src/Contents';

function Search({txt,setxt}) {
  return (
    <div>

    <div className='bg-danger  p-3 d-flex justify-content-around  align-items-center flex-wrap '>

      <div className="logo">
      <FaYoutube className='fs-10' style={{fontSize:"100px"}} />
      </div>
      <div>

      <Form.Control type="text" placeholder="Search...." 
      value={txt}
      onChange={(e)=>setxt(e.target.value)}
      
      
      className='p-2 mt-2   ' style={{width:"50vw"}} />
      </div>
      
    </div>
    
    </div>
    
  )
}

export default Search
