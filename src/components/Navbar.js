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
            <ul className='icons'>
                <li>
                    <RiLiveLine/>
                    <a>LIVE</a>
                </li>
                <li>
                    <MdCardMembership className='membership'/>
                    <a>MEMBERSHIPS</a>
                </li>
                <li>
                    <BiRun className='run'/>
                    <a>PLANS</a>
                </li>
                <li>
                    <BsGrid className='grid'/>
                    <a>MORE</a>
                </li>
            </ul>
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