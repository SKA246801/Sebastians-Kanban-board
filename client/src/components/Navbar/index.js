import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { sidebarData } from './data'
import './navbar.css'

function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const categories = useState([
        {
            title: 'Account'
        },
        {
            title: 'Dashboard'
        },
        {
            title: 'Settings'
        }
      ])
    
      const [currentCategory, setCurrentCategory] = useState(categories[0])

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                    <h1 key={currentCategory.title} className={currentCategory.class2}>{currentCategory.title}</h1>
                <Link to='/create' className='plus-icon'>
                    <AiIcons.AiOutlinePlus />
                </Link>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to ='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {sidebarData.map((item, i) => {
                        return (
                            <li key={i} className={item.class}>
                                <Link to={item.path} onClick={() => setCurrentCategory(item)}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
