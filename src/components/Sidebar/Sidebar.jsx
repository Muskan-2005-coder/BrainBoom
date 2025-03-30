import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar=()=>{
  const [extended,setExtended]=useState(false)
  const{onSent,prevPrompts,setRecentPrompts,newChat}=useContext(Context)

  const loadPrompt=async(prompt)=>{
    setRecentPrompts(prompt)
    await onSent(prompt)
  }
  return(
  <div className='sidebar'>
    <div className='top'>
      <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=""/>
      <h4 className='menu'>Menu</h4>
      <div onClick={()=>newChat()} className='new-chat'>
<img src={assets.plus_icon} alt=""/>
{extended?<h4>New Chat</h4>:null}
    </div>
    {extended?
    <div className="recent">
      <h4 className='recent-title'>Recent</h4> 
      {prevPrompts.map((item,index)=>{
        return(
<div onClick={()=>loadPrompt(item)} className="recent-entry">
        <img src={assets.message_icon} alt=""/>
        <h4>{item.slice(0,18)}...</h4>
        </div>
        )
      })}
        </div>:null}
        </div>
    <div className='bottom'>
      <div className="bottom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {extended? <h4>Help</h4>:null}
        </div>

        <div className="bottom-item recent-entry">
        <img src={assets.history_icon} alt="" />
        {extended?<h4>Activity</h4>:null}
        </div>

        <div className="bottom-item recent-entry">
        <img src={assets.setting_icon} alt="" />
        {extended?<h4>Settings</h4>:null}
      </div>
    </div>
    </div>
  )
}


export default Sidebar
