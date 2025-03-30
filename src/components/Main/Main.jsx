import React, { useContext } from 'react'
import'./Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'

const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>BrainBoom</p>
        <img src={assets.user_icon} alt=""/>
      </div>
      <div className="main-container">
        {!showResult?<><div className="greet">
          <center><span>Discover, Explore and Enjoy</span></center>
          <p>At your service! How may I assist?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Want to know more about me? </p>
            <a href=""><img src={assets.compass_icon} alt=""/></a>
          </div>

          <div className="card">
            <p>Brifly summerize this concept: Urban Planning </p>
            <a href="https://en.wikipedia.org/wiki/Urban_planning"><img src={assets.bulb_icon} alt=""/></a>
          </div>


          <div className="card">
            <p>Have FeedBack ? We'd love to hear from you! </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnWY3QYpXZqAZxZ-GXGZ64F9vEdSbfU18rFKM90KA_vd7PgQ/viewform?usp=header"><img src={assets.message_icon} alt=''/></a>
          </div>

          <div className="card">
            <p>Improve reliability of the following code </p>
           <a href=""><img src={assets.code_icon}alt=''/></a>
          </div>
        </div></>:<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt=""/>
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.brainboom_icon} alt=""/>
            {loading?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            <p
             dangerouslySetInnerHTML={{__html:resultData}}></p>
          </div>
</div>
        }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
           {input?<img onClick={()=>onSent()}  src={assets.send_icon} alt="" />:null} 
            </div>
            </div>
            <p className="bottom-info">
              It may display some inaccurate info.
            </p>
        </div>
      </div>
    </div>
  
  )
}

export default Main
