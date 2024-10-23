import React from 'react'
import Videolist from '../Videolist'

function Contents({viddata}) {
  console.log(viddata);
  
  return (
    <div>
      {
        viddata.length != 0 ?  <h1 className=' text-center'>
        THE result shown below...) :  </h1> : <h1 className='text-center'>Kindly search videos...)</h1>
     
        }
      
    </div>
  )
}

export default Contents
