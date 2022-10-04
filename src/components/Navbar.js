import React from 'react'
import "./Navbar.css"
import { RiLiveLine,  } from "react-icons/ri"
import { MdCardMembership } from "react-icons/md"
import { BiRun } from "react-icons/bi"
import { BsGrid, BsFillPersonFill } from "react-icons/bs"
function Navbar() {
  return (
    <nav className='main-nav'>
         {/* logo */}
        <div className='logo'>
            <h2>
                <span>HF</span>
            </h2>
        </div>

        {/* menu part */}
        <div className='menu'>
            <div className='menu-icons'>
            <ul>
                <li>
                    <RiLiveLine className='live'/>
                </li>
                <li>
                    <MdCardMembership className='membership'/>
                </li>
                <li>
                    <BiRun className='run'/>
                </li>
                <li>
                    <BsGrid className='grid'/>
                </li>
            </ul>
            </div>
            <div className='menu-link'>
            <ul>
                <li>
                    <a href='#'>LIVE</a>
                </li>
                <li>
                    <a href='#'>MEMBERSHIPS</a>
                </li>
                <li>
                    <a href='#'>PLANS</a>
                </li>
                <li>
                    <a href='#'>MORE</a>
                </li>
            </ul>
            </div>
            
        </div>

        {/* login part */}
        <div className='login'>
            <BsFillPersonFill className='login-icon'/>
            <a href='#'>LOGIN</a>
        </div>
    </nav>
  )
}

export default Navbar