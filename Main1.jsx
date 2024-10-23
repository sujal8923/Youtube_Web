import React, { useState } from 'react'
import Search from './Search'
import Videodetails from './Videodetails'
import Videolist from './Videolist'
// import Content from './src/Contents'
import Contents from './src/Contents'




function Main1() {
    
    let [txt,setxt] = useState('')
    let [viddata,setvidata] = useState([])
    let [vidid,setvidid] = useState(null)
    let [debounce,setdebounce] = useState(txt)
  

    let divresponsive = vidid ? 'col-md-3' : 'col-12'
  return (
    <div>
      
        <Search txt={txt} setxt={setxt}/>
    <Contents viddata={viddata}/>

        <div className="container-fluid mt-3 ">

<div className="row  gap-4  ">
  <div className="col-md-8    ">
    {
      vidid ?   <Videodetails vidid={vidid} /> : ''
    }
      </div>
    {/* <Contents viddata = {viddata}/> */}
    
  <div className={` ${divresponsive}   `}>
<Videolist txt={txt} setvidata={setvidata} viddata={viddata}  vidid={vidid} setvidid={setvidid} debounce ={debounce} setdebounce ={setdebounce}/>
  </div>
</div>
</div>
    </div>
  )
}

export default Main1
