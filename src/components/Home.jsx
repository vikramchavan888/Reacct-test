"client side"
import {useState } from 'react'
import Newnote from './Newnote';
import Notelist from './Notelist';
//import Notelist from './components/Notelist'
//import Newnote from './components/Newnote'
import './Home.css'

function Home() {
  const [onAddnote ,setonAddnote]=useState(false);

     return (
    <>
    
    <div className='note-content-container-parent'>
    <img className='bg-image' src="./Images/img1.png"/>
        <div  className="Pocket-Notes">Pocket Notes</div>
        <p className='paragraph'>Send and receive messages without keeping your phone online.<br></br> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p> 
       </div>
       <div >
           <div  className="Heading">Pocket Notes</div>
           <div className='note-list' ><Notelist  /></div>        
           </div>
       {onAddnote && (<Newnote  setOpen={setonAddnote}/>)}
       <button  onClick={() =>setonAddnote(true) } className="Add-note">+</button>

    </>
  )
}

export default Home