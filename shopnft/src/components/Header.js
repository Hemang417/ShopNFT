import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return <div className='header'>
        <div className='logocontainer'>
            <img src = {punkLogo} className='punkLogo' alt=''></img>
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon}></img>
            </div>
            <input className='searchInput' placeholder='Collection, item or user...'></input>
        </div>

        <div className='headerItems'>
            <p>Drops</p>
            <p>MarketPlace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitchIcon}></img>
            </div>
        </div>

        <div className='loginButton'>GETIN</div>

        </div>
}

export default Header
